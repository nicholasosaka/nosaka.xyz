import sanity from '../lib/sanity'
import BlockContent from '@sanity/block-content-to-react'
import Date from './Date'
import PortableImage from './PortableText/PortableImage'
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'

const builder = imageUrlBuilder(sanity)

const serializers = {
    types: {
        image: (props: any) => {
            return (
                <PortableImage 
                    url={builder.image(props.node).url()}
                />
            )
        },
        seperator: (props: any) => {
            return <div className="border-t-2"></div>
        },
        Button: (props: any) => {
            console.log(props)
            return <Link href={props.node.uri} passHref>
                        <button className="text-center font-sans duration-500 bg-transparent text-chestnut hover:bg-chestnut hover:text-white font-bold py-2 px-4 rounded inline-flex items-center border-2 border-chestnut">
                            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                            <span className="">{props.node.title}</span>
                        </button>
                    </Link>

        }
    },
    marks: {
        highlight: (props: any) => {
            return <span className='bg-[#fffb21]'>{props.children}</span>
        },
        underline: (props: any) => {
            return <span className='underline'>{props.children}</span>
        },
        strikethrough: (props: any) => {
            return <span className='line-through'>{props.children}</span>
        },
        superscript: (props: any) => {
            return <sup>{props.children}</sup>
        },
        subscript: (props: any) => {
            return <sub>{props.children}</sub>
        }
    }
}

const PostLayout = (props: any) => {
    const { title = 'Untitled', subtitle = '', name, categories, authorImage, body = [], publishedAt, mainImage } = props
    return (
        <>
            <div className="sm:w-10/12 xl:w-8/12 mx-auto">

                {mainImage && (
                    <div className="mt-0 mb-8">
                        <BlockContent
                            blocks={mainImage}
                            serializers={serializers}
                            {...sanity.config()}
                        />
                    </div>
                )}
                <h1 className="text-3xl md:text-4xl font-extrabold">{title}</h1>
                <h3 className="md:text-xl font-light text-chestnut">{subtitle}</h3>
                <div className="mt-1 font-light">
                    {name && (
                        <>
                            <p className="inline">{name}</p>
                            <p className="mx-1.5 inline">⋅</p>
                        </>
                    )}
                    <Date date={publishedAt}/>
                </div>
                <article className="prose max-w-none py-10 font-cmu ">
                    <BlockContent
                        blocks={body}
                        serializers={serializers}
                        imageOptions={{ w: 320, h: 240, fit: 'max' }}
                        {...sanity.config()}
                    />
                </article>
            </div>
        </>
    )
}

export default PostLayout