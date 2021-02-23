import Head from 'next/head'
import Header from '../components/Header'
import { getAllPosts } from '../api/index'
import Link from 'next/link'
import moment from 'moment'

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
              props.posts.map(
                function(post, idx) {
                  return (
                    <li key={idx} className="grid md:grid-cols-5 mb-5">
                      <span className="order-2 md:mx-auto md:mt-1 lg:mt-1.5 md:order-none text-sm font-light md:text-base md:font-bold tracking-tight">
                        <p className="inline">{moment(post.date).format("MMM")}</p>
                        <p className="ml-1 inline ordinal">{moment(post.date).format("Do YYYY")}</p>
                      </span>
                      <Link href={`/posts/${post.slug}`}>
                        <a className="order-1 md:col-span-3 text-2xl font-bold link-animation">{post.title}</a>
                      </Link>
                      <p className="order-last md:col-start-2 md:col-span-4 xl:col-start-2 xl:col-span-3 mt-2 leading-snug">{post.excerpt}</p>
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