import Head from 'next/head'
import Header from '../components/Header'
import { getAllPosts } from '../api/index'
import Link from 'next/link'
import Date from '../components/Date'
import _ from 'lodash'
import moment from 'moment'
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'


export default function Home(props) {
  return (
    <div className="">
      <Head>
        <title>nosaka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Header/>

        <div className="mt-8 md:mt-10 lg:mt-20 mx-auto w-5/6 md:w-9/12 lg:w-8/12">
          <ul className="">
            {
              _.orderBy(props.posts, 
                function(obj) {
                  return new moment(obj.date).format("YYYYMMDD")
                }
              )
              .reverse()
              .map(
                function(post, idx) {
                  return (
                    <li key={idx} className="grid md:grid-cols-5 mb-5">
                      <Date date={post.date} bold={true}/>
                      <Link href={`/posts/${post.slug}`}>
                        <a className="order-1 md:col-span-3 text-2xl font-bold link-animation">{post.title}</a>
                      </Link>
                      <p className="order-last md:col-start-2 md:col-span-4 xl:col-start-2 xl:col-span-3 mt-2 leading-snug">
                        {
                          unified()
                          .use(parse)
                          .use(remark2react)
                          .processSync(post.excerpt).result
                        }
                      </p>
                    </li>
                  )
                }
              )
            }
          </ul>

        </div>
      </main>

    </div>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts()
  return {
    props: {
      posts: allPosts
    }
  }
}