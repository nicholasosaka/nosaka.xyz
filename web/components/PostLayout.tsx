import sanity from '../lib/sanity'
import BlockContent from '@sanity/block-content-to-react'
import Date from './Date'
import PortableImage from './PortableText/PortableImage'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanity)

const serializers = {
    types: {
        image: (props: any) => {
            return (
                <PortableImage 
                    url={builder.image(props.node).url()}
                />
            )
        } 
    }
}

const PostLayout = (props: any) => {
    const { title = 'Untitled', subtitle = '', name, categories, authorImage, body = [], publishedAt } = props
    return (
        <>
            <div className="sm:w-10/12 xl:w-8/12 mx-auto">
                <h1 className="text-3xl md:text-4xl font-extrabold">{title}</h1>
                <h3 className="md:text-xl font-light text-chestnut">{subtitle}</h3>
                <div className="mt-1 font-light">
                    {name && (
                        <>
                            <p className="inline">{name}</p>
                            <p className="ml-1.5 inline">⋅</p>
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