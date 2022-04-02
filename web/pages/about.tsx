import Header from '@components/Header'
import Head from 'next/head'
import groq from 'groq'
import sanity from '../lib/sanity'
import BlockContent from '@sanity/block-content-to-react'
import serializers from '@lib/serializers'

const About = (props: any) => {
    return (
        <div className="bg-[url('/svgs/blobs/blob-wave.svg')] bg-bottom bg-no-repeat bg-cover h-screen">
            <Head>
                <title>about - nosaka</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>
            <div className="mt-8 xl:mt-20 mx-auto w-5/6 md:w-9/12 lg:w-8/12">
                <h1 className="text-4xl uppercase font-extrabold mb-5">About</h1>
                <div className="prose">
                    <BlockContent
                        blocks={props.me.bio}
                        serializers={serializers}
                        imageOptions={{ w: 320, h: 240, fit: 'max' }}
                        {...sanity.config()}
                    />
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