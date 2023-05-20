import Header from '@components/Header'
import Head from 'next/head'
import groq from 'groq'
import sanity from '../lib/sanity'
import BlockContent from '@sanity/block-content-to-react'
import serializers from '@lib/serializers'
import IconLink from '@components/IconLink'
import Link from 'next/link'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'


const About = (props: any) => {
    const builder = imageUrlBuilder(sanity)
    const imageUrl = builder.image(props.me.image).url()
    return (
        <div className="">
            <Head>
                <title>About Nicholas Osaka</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>
            <div className='mt-8 xl:mt-20 w-5/6 md:w-9/12 lg:w-7/12 mx-auto'>
                <div className="">
                    <h1 className="text-2xl uppercase font-extrabold">About</h1>
                    <div className="xl:flex flex-row lg:w-7/12 justify-between my-3">
                        <IconLink svg="/svgs/email.svg" alt="Email Icon" text="nosaka@charlotte.edu" link="mailto:nosaka@charlotte.edu"/>
                        <IconLink svg="/svgs/github.svg" alt="GitHub Icon" text="nicholasosaka" link="https://github.com/nicholasosaka"/>
                        <IconLink svg="/svgs/linkedin.svg" alt="LinkedIn Icon" text="nicholasosaka" link="https://linkedin.com/in/nicholasosaka/"/>
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
                    <div className="flex md:flex-row flex-col gap-y-8 gap-x-16 my-8 md:w-9/12 lg:w-11/12">
                        <Link href="/cv.pdf" passHref>
                            <button className="transition duration-500 bg-transparent text-chestnut hover:bg-chestnut hover:text-white font-bold py-2 px-4 rounded inline-flex items-center border-2 border-chestnut">
                                <span className="mx-auto">View my CV</span>
                            </button>
                        </Link>
                        <Link href="/resume.pdf" passHref>
                        <button className="transition duration-500 bg-transparent text-chestnut hover:bg-chestnut hover:text-white font-bold py-2 px-4 rounded inline-flex items-center border-2 border-chestnut">
                                <span className="mx-auto">View my one page resume</span>
                            </button>

                        </Link>
                    </div>
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