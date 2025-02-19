import Head from 'next/head'
import Header from '@components/Header'
import Link from 'next/link'
import Date from '@components/Date'

import { getSortedPostsData } from '@lib/posts'

const Home = (props: any) => {
  return (
    <div>
      <Head>
        <title>Nicholas Osaka</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Nicholas Osaka is a writer, worker in tech, and graduate student."/>
      </Head>
      <main className=""> 
        <Header fullhr/>
        <div className="mt-8 md:mt-10 lg:mt-20 mx-auto w-5/6 md:w-9/12 lg:w-8/12">
        <ul>
            {props.posts.map((post: any) => post.id && (
                <li key={post._id} className="grid md:grid-cols-5 mb-5">
                    <Date date={post.date}/>
                    <Link className="order-2 md:col-span-4 text-2xl font-bold link-animation hover:underline transition-all duration-700 hover:-translate-y-1" href={`/post/${post.id}`} >
                        {post.title}
                    </Link>
                    <p className="order-3 -mt-1 md:col-start-2 md:col-span-4 font-light text-chestnut">{post.subtitle}</p>

                    <div className="order-4 md:col-start-2 md:col-span-4 xl:col-start-2 xl:col-span-3 mt-1 leading-snug font-extralight">
                        {post.excerpt}
                    </div>
                        
                </li>
            ))}
        </ul>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const data = getSortedPostsData()
  console.log(data)
  return {
    props: {
      posts: data
    },
    revalidate: 60 * 60 //revalidate every hour at most
  } 
}

export default Home