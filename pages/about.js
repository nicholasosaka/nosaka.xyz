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
      <div className="mx-auto my-10 w-screen h-screen flex flex-col md:flex-row items-center justify-evenly">
          {/* About page content here */}
          <img className="w-1/2 md:w-1/4 md:h-1/4 rounded-lg shadow-2xl flex-shrink-0 m-10" src="/static/full_length_profile_50.jpg"></img>
          <div className="px-5 md:w-1/3">
            <h1 className="mb-3 text-gray-900 font-extrabold text-2xl">About Nicholas</h1>
            <p>
              Nicholas Osaka is a software engineer and motion designer based in Charlotte, NC.
              He's an undergraduate and early-entry master’s computer science student at The University of North Carolina at Charlotte
              studying artificial intelligence. His research interests include computer vision, computational imaging, and other machine learning applications. 
              With his double major in philosophy focusing on ethics, he is uniquely positioned to approach complex issues in emerging technologies. 
              Along with being an undergraduate teaching assistant, he's a motion graphic designer for The Littlefield Company.             </p>
          </div>
      </div>
    </main>
  </div>
)

export default About
