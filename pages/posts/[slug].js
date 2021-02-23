import { getAllPosts, getPostBySlug } from '../../api/index'

export default function BlogPost(props) {
    return (
        <div>
            {props.title}
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
  