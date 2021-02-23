import { getAllPosts, getPostBySlug } from '../../api/index'
import PostLayout from '../../components/post'
import Header from '../../components/Header'

export default function BlogPost(props) {
    return (
        <div>
            <Header/>
            <div className="mt-8 xl:mt-20 mx-auto w-5/6 md:w-9/12 lg:w-8/12">
                <PostLayout title={props.title} date={props.date} time={props.time} content={props.content}/>
            </div>
        </div>
    )
}

export async function getStaticProps(context) {
    return {
        props: await getPostBySlug(context.params.slug)
    }
}

export async function getStaticPaths() {
    let paths = await getAllPosts()
    paths = paths.map(post => 
        ( { params: { slug:post.slug } } )
    )
    return {
      paths: paths,
      fallback: false
    }
}
  