import Head from 'next/head'
import Nav from '../../components/Nav'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../components/client'
import moment from 'moment'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'


const Post = (props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  const {
    title = "Untitled Post",
    name = "Authorless Post",
    categories,
    authorImage,
    body = [],
    date,
  } = props

  return (
    <>
      <Head>
        <title>nosaka - blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <article className="flex flex-col space-y-2 mx-auto w-3/4 lg:w-3/5 mt-10">
        {
          router.isFallback ? (
            <h1 className="text-5xl font-bold leading-none">Loading...</h1>
          ) : (
            <>
              <h1 className="text-5xl font-bold leading-none">{title}</h1>
              {categories && (
                <div className="font-light">
                  <ul className="flex flex-row space-x-4">
                    {categories.map(category => <li key={category}>{category}</li>)}
                  </ul>
                </div>
              )}
              <div className="flex flex-row items-center space-x-5 pt-10">
                {authorImage && (
                  <div>
                    <img
                      className="rounded-full"
                      src={imageUrlBuilder(client).image(authorImage)
                        .width(55)
                        .url()}
                    />
                  </div>
                )}
                <div className="flex flex-row space-x-8">
                  <span className="font-bold">
                    {name}
                  </span>
                  <span className="font-hairline">
                    {moment(date, moment.ISO_8601).format('MMMM Do YYYY')}
                  </span>
                </div>
              </div>
              <div>
              </div>
              <BlockContent
                blocks={body}
                imageOptions={{ w: 320, h: 240, fit: 'max' }}
                {...client.config()}
              />
            </>
          )
        }
      </article>
    </>
  )
}

const groqQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "date": publishedAt,
  "categories": categories[]->title,
  "authorImage": author->image,
  "body": body
}`

// Post.getInitialProps = async function(context) {
//   const { slug = "" } = context.query
//   return await client.fetch(groqQuery, { slug })
// }

async function getAllPostsSlugs(){
  const allPosts = await client.fetch(groq`
  *[_type == "post" && publishedAt < now()]{slug} | order(publishedAt desc)
  `)
  return allPosts
}

export async function getStaticProps(params){
  const { slug = "" } = params.slug
  const postData = await client.fetch(groqQuery, { slug })
  return {
    props : {
      post: postData
    }
  }
}

export async function getStaticPaths() {
  const allSlugs = await getAllPostsSlugs()
  return {
    paths:
      allSlugs?.map(slug => ({
        params: {
          slug: slug.current,
        },
      })) || [],
    fallback: true,
  }
}

export default Post
