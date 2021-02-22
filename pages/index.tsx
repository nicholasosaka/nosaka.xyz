import Head from 'next/head'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
      <Head>
        <title>nosaka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen bg-ghost">
        <Header/>

        <div className="mt-20 mx-auto md:w-8/12 w-4/5">
          {/* Blog Post list here */}
        </div>
      </main>

    </div>
  )
}


export default Home