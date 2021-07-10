import groq from 'groq'
import Head from "next/head";
import Header from '../../components/Header'
import sanity from '../../lib/sanity'
import PostLayout from '../../components/PostLayout'
import imageUrlBuilder from '@sanity/image-url'

const Post = (props: any) => {
    const { title = 'Untitled', subtitle = '', name, categories, authorImage, body = [], publishedAt } = props
    return (
        <div>
            <Head>
                <title>{props.title} - nosaka</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>
            <div className="mt-8 xl:mt-20 mx-auto w-5/6 md:w-9/12 lg:w-8/12">
                <PostLayout {...props}/> 
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
    publishedAt
  }`

Post.getInitialProps = async function(ctx: any) {
    const slug = ctx.query.post
    const res = await sanity.fetch(query, { slug })
    return res
}

export default Post