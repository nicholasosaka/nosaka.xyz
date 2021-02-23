import matter from 'gray-matter'

export async function getAllPosts() {
  const context = require.context('../_posts', false, /\.md$/)
  const posts = []
  for(const key of context.keys()){
    const post = key.slice(2);
    const content = await import(`../_posts/${post}`)
    const meta = matter(content.default)
    posts.push({
      slug: post.replace('.md',''),
      title: meta.data.title,
      excerpt: meta.data.excerpt,
      time: meta.data.time,
      date: meta.data.date
    })
  }
  return posts;
}

export async function getPostBySlug(slug) {
  const fileContent = await import(`../_posts/${slug}.md`)
  const meta = matter(fileContent.default)
  return {
    title: meta.data.title, 
    time: meta.data.time,
    date: meta.data.date,
    content: meta.content
  }
}
