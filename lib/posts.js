import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const postsDir = path.join(process.cwd(), 'posts');


const firstFourSentences = (f, options) => {
  f.excerpt = f.content.split('. ').slice(0,4).join('. ').concat('.');
}

export function getPostData(id) {
  const fileName = id += '.md'
  const fileContents = fs.readFileSync(path.join(postsDir, id), 'utf8');
  const matterResult = matter(fileContents);
  return {
    id,
    ...matterResult
  }
}

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDir);

    const allPostsData = fileNames.map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');
  
      // Read markdown file as string
      const fullPath = path.join(postsDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
  
      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {excerpt: firstFourSentences});
      const excerpt = matterResult.excerpt
      // Combine the data with the id
      return {
        id,
        excerpt,
        ...matterResult.data,
      };
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  }