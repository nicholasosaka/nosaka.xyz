import Head from 'next/head'
import Nav from '../components/Nav'

const About = () => (
  <div>
    <Head>
      <title>nosaka - about</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="container subpixel-antialiased">
      <div className="mx-auto mt-1 absolute top-0">
        <Nav/>
      </div>
      <div className="mx-auto w-screen h-screen flex flex-col items-center justify-evenly">
          {/* About page content here */}
      </div>
    </main>
  </div>
)

export default About
