import PortableImage from "@components/PortableText/PortableImage"
import Link from "next/link"
import imageUrlBuilder from '@sanity/image-url'
import sanity from './sanity'

const serializers = {
    types: {
        image: (props: any) => {
            return (
                <PortableImage 
                    url={imageUrlBuilder(sanity).image(props.node).url()}
                />
            )
        },
        seperator: (props: any) => {
            return <div className="border-t-2"></div>
        },
        Button: (props: any) => {
            return <Link href={props.node.uri} passHref>
                        <button className="text-center font-sans duration-500 bg-transparent text-chestnut hover:bg-chestnut hover:text-white font-bold py-2 px-4 rounded inline-flex items-center border-2 border-chestnut">
                            {/* <svg className="fill-current w-4 h-4 mr-2 text-chestnut" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> */}
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

export default serializers