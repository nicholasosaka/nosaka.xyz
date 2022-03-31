import Link from 'next/link'
import sanity from '../lib/sanity'
import Date from '../components/Date'
import LinesEllipsis from 'react-lines-ellipsis'
import BlockContent from '@sanity/block-content-to-react'

const serializers = {

}

const AllPosts = (props: any) => {
    const posts = props.posts
    return (
        <ul>
            {posts.map((post: any) => post.slug && (
                <li key={post._id} className="grid md:grid-cols-5 mb-5">
                    <Date date={post.publishedAt}/>
                    <Link href={`/post/${post.slug.current}`}>
                        <a className="order-2 md:col-span-3 text-2xl font-bold link-animation">{post.title}</a>
                    </Link>
                    <p className="order-3 -mt-1 md:col-start-2 md:col-span-4 font-light text-chestnut">{post.subtitle}</p>
                    
                    <div className="order-4 md:col-start-2 md:col-span-4 xl:col-start-2 xl:col-span-3 mt-1 leading-snug font-extralight">
                        {post.blurb ?
                            <BlockContent
                                blocks={post.blurb}
                                {...sanity.config()}
                            />
                            : 
                            <LinesEllipsis
                                text={normalizePostBody(post)}
                                maxLine='3'
                                ellipsis='...'
                                trimRight
                                basedOn='words'
                            />
                        }
                    </div>
                        
                </li>
            ))}
        </ul>
    )
}

const normalizePostBody = (post: any) => {
    let normalized = ""

    post.body[0].children.forEach((child: { text: string }) => {
        normalized += child.text
    })    
    return normalized
}

export default AllPosts