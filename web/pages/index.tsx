import Head from 'next/head'
import Header from '@components/Header'
import AllPosts from '@components/AllPosts'
import groq from 'groq'
import sanity from '../lib/sanity'

const Home = (props: any) => {
  return (
    <div>
      <Head>
        <title>Nicholas Osaka</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Nicholas Osaka is a writer, worker in tech, and graduate student."/>
      </Head>

      <main className=""> 
        <Header/>
        <div className="mt-8 md:mt-10 lg:mt-20 mx-auto w-5/6 md:w-9/12 lg:w-8/12">
          <AllPosts posts={props.posts}/>
        </div>
      </main>

    </div>
  )
}


const query = process.env.NODE_ENV === 'development' ? 
  groq`*[_type == "post"] | order(publishedAt desc)` : //development
  groq`*[_type == "post" && dateTime(publishedAt) < dateTime(now())] | order(publishedAt desc)` //production


export async function getStaticProps() {
  const posts = await sanity.fetch(query)
  return {
    props: {
      posts: posts
    },
    revalidate: 60 * 60 //revalidate every hour at most
  } 
}

export default Home