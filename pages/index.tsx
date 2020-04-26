import Head from 'next/head'
import PersonalInfo from '../components/PersonalInfo'
import Nav from '../components/Nav'

const Home = () => (
  <div>
    <Head>
      <title>nosaka</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="container subpixel-antialiased">
      <Nav/>
      <div className="mx-auto w-screen h-screen flex flex-col items-center justify-evenly">
        <div className="w-screen flex flex-col md:flex-row items-center justify-evenly">
          <span className="inline-block">
            <PersonalInfo/>
          </span>
          <span className="inline-block mt-16 sm:my-0">
            <img src='/static/_profile_picture_50.png' className="rounded-full shadow-4xl border-green-900 border-8"/>
          </span>
        </div>
      </div>
    </main>
  </div>
)

export default Home
