import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/Nav'
import groq from 'groq'
import client from '../components/client'
import moment from 'moment'

function PostLink(post){
  const {
    _id,
    title = '',
    slug = '',
    _updatedAt = '',
    excerpt,
    publishedAt
  } = post

  return (
    <li className="grid grid-cols-5 grid-rows-1 col-gap-0" key={_id}>
      <p className="mx-auto pt-3 row-span-2 font-thin">{moment(publishedAt).format('MMMM Do YYYY')}</p>
      <div className="col-span-4">
        <Link href='/writings/[slug]' as={`/writings/${slug.current}`}>
          <a className="text-3xl font-bold transition ease-in duration-700 hover:underline text-green-900">{title}</a>
        </Link>
        <p className="">{excerpt}</p>
      </div>
    </li>
  )
}
  
function Blog(props) {
  const { 
    posts = []
  } = props

  posts.map(p => console.log(p.slug))

  return (
    <div>
      <Head>
        <title>nosaka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav/>
   
      <main className="subpixel-antialiased mt-12 w-3/4 lg:w-1/2 mx-auto">
        <h1 className="mx-auto text-4xl font-extrabold text-center tracking-wide text-green-900">Writings</h1>
        <hr className="border-green-900 border-t-4 m-1"/>
        <ul className="flex flex-col mt-12 space-y-5">
          {posts.map(post => post.slug && (PostLink(post)))}
        </ul>
      </main>
    </div>
  );
}

Blog.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `)
})

// export async function getStaticProps() {
//   const allPosts = await client.fetch(groq`
//   *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
//   `)
//   console.log(`writings staticprops: ${allPosts}`)
//   return {
//     props: { allPosts }
//   }
// }

export default Blog;