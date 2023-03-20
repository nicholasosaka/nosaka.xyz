import Header from '@components/Header'
import Head from 'next/head'
import groq from 'groq'
import sanity from '../lib/sanity'
import BlockContent from '@sanity/block-content-to-react'
import serializers from '@lib/serializers'
import IconLink from '@components/IconLink'
import Link from 'next/link'


const About = (props: any) => {
    return (
        <div className="">
            <Head>
                <title>about - nosaka</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>
            <div className="mt-8 xl:mt-20 mx-auto w-5/6 md:w-9/12 lg:w-8/12">
                <h1 className="text-2xl uppercase font-extrabold">About</h1>
                <div className="flex flex-row sm:w-8/12 lg:w-6/12 justify-between">
                    <IconLink svg="/svgs/email.svg" alt="Email Icon" text="nosaka@uncc.edu" link="mailto:nosaka@uncc.edu"/>
                    <IconLink svg="/svgs/github.svg" alt="GitHub Icon" text="nosaka0" link="https://github.com/nosaka0"/>
                    <IconLink svg="/svgs/linkedin.svg" alt="LinkedIn Icon" text="nosaka0" link="https://linkedin.com/in/nosaka0"/>
                </div>
                <div className="prose">
                    <BlockContent
                        blocks={props.me.bio}
                        serializers={serializers}
                        imageOptions={{ w: 320, h: 240, fit: 'max' }}
                        {...sanity.config()}
                    />
                </div>
                <h1 className="text-2xl font-bold text-chestnut">Looking for a CV/Resume?</h1>
                <p className='prose'>You can find those here, as PDFs. I try to keep them as up-to-date as possible.</p>
                <div className="flex md:flex-row flex-col justify-center gap-y-8 gap-x-16 my-8 w-5/6 md:w-9/12 lg:w-8/12">
                    <Link href="/cv.pdf" passHref>
                        <button className="transition duration-500 bg-transparent text-chestnut hover:bg-chestnut hover:text-white font-bold py-2 px-4 rounded inline-flex items-center border-2 border-chestnut">
                            <span className="">View my CV</span>
                        </button>
                    </Link>
                    <Link href="/resume.pdf" passHref>
                    <button className="transition duration-500 bg-transparent text-chestnut hover:bg-chestnut hover:text-white font-bold py-2 px-4 rounded inline-flex items-center border-2 border-chestnut">
                            <span className="">View my one page resume</span>
                        </button>

                    </Link>
                </div>


            </div>
        </div>
    )
}

const query = groq`*[_type == "author" && slug.current == "nicholas-osaka"][0]`

export async function getStaticProps() {
  const me = await sanity.fetch(query)
  return {
    props: {
      me: me
    },
    revalidate: 3600 //revalidate page contents upon request and at most every hour
  } 
}

export default About