import groq from 'groq'
import Head from "next/head";
import Header from '@components/Header'
import PostLayout from '@components/PostLayout'
import imageUrlBuilder from '@sanity/image-url'

const Post = (props: any) => {
    const { title = 'Untitled', subtitle = '', name, categories, authorImage, body = [], publishedAt, mainImage } = props
    return (
        <div>
            <Head>
                <title>{props.post.title} - nosaka</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>
            <div className="mt-8 xl:mt-10 mx-auto w-5/6 md:w-9/12 lg:w-8/12">
                <PostLayout {...props.post}/> 
            </div>
        </div>
    )
}

const url = (builder: any) => builder.url() ? builder.url() : ""
const img = (src: any) => imageUrlBuilder(sanity).image(src)

const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    subtitle,
    "name": author->name,
    "categories": categories[]->title,
    body,
    publishedAt,
    mainImage
  }`

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  const posts = await sanity.fetch(groq`*[_type == "post"]`)

  // Get paths
  const paths = posts.map((post: any) => ({
    params: { post: post.slug.current },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' }
}

// This also gets called at build time
export async function getStaticProps( params: {params: { post: string }} ) {
    // params contains the post `post`.
    // If the route is like /post/1, then params.post is 1
    const slug = params.params.post
    const post = await sanity.fetch(query, { slug })
    // Pass post data to the page via props
    return { props: { post } }
}

export default Post