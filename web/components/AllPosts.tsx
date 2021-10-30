import Link from 'next/link'
import Date from '../components/Date'
import LinesEllipsis from 'react-lines-ellipsis'

const AllPosts = (props: any) => {
    const { posts = [] } = props
    return (
        <ul>
            {posts.map((post: any) => post.slug && (
                <li key={post._id} className="grid md:grid-cols-5 mb-5">
                    <Date date={post.publishedAt}/>
                    <Link href={`/post/${post.slug.current}`}>
                        <a className="order-2 md:col-span-3 text-2xl font-bold link-animation">{post.title}</a>
                    </Link>
                    <p className="order-3 -mt-1 md:col-start-2 md:col-span-4 font-light text-chestnut">{post.subtitle}</p>
                    <LinesEllipsis 
                        className="order-4 md:col-start-2 md:col-span-4 xl:col-start-2 xl:col-span-3 mt-1 leading-snug font-extralight"
                        text={normalizePostBody(post)}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='words'
                    />
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