import Head from 'next/head'
import PersonalInfo from '../components/PersonalInfo'

const Home = () => (
  <div>
    <Head>
      <title>nosaka</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div className="w-screen h-screen flex flex-col md:flex-row items-center justify-evenly">
        <span className="inline-block">
          <PersonalInfo/>
        </span>
        <span className="inline-block">
          <img src='/static/_profile_picture_50.png' className="rounded-full shadow-most"/>
        </span>
      </div>
    </main>
  </div>
)

export default Home
