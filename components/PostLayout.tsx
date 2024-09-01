import sanity from '../lib/sanity'
import BlockContent from '@sanity/block-content-to-react'
import Date from './Date'
import serializers from '@lib/serializers'

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