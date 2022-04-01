import Head from 'next/head'
import Header from '@components/Header'
import AllPosts from '@components/AllPosts'
import groq from 'groq'
import sanity from '../lib/sanity'

const Home = (props: any) => {
  const currentPosts = props.posts.filter((p: { publishedAt: string }) => Date.parse(p.publishedAt) < Date.now() )

  return (
    <div>
      <Head>
        <title>Nicholas Osaka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-none lg:bg-[url('/svgs/blobs/blob-left.svg')] bg-bottom bg-no-repeat bg-cover lg:h-screen"> 
        <Header/>
        <div className="mt-8 md:mt-10 lg:mt-20 mx-auto w-5/6 md:w-9/12 lg:w-8/12">
          <AllPosts posts={currentPosts}/>
        </div>
      </main>

    </div>
  )
}

const query = groq`*[_type == "post"] | order(publishedAt desc)`

export async function getStaticProps() {
  const posts = await sanity.fetch(query)
  return {
    props: {
      posts: posts
    }
  } 
}

export default Home