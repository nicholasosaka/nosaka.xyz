import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

export default function Home() {
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
            <li>Posts go here</li>  
          </ul>

        </div>
      </main>

    </div>
  )
}
