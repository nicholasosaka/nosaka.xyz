// import Link from 'next/link'
import Image, { ImageProps } from 'next/image'
import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    img: (props) => {
      return <Image {...(props) as ImageProps} />
    },
    // For headers, we ought to "subtract" one from the header number to adjust for the 
    h1: (props) => { 
      console.log(props)
      return <h2 {...props} className="text-2xl md:text-3xl font-extrabold font-sans">{props.children}</h2>
    },
    h2: (props) => { 
      console.log(props)
      return <h3 {...props} className="text-xl md:text-2xl font-extrabold font-sans">{props.children}</h3>
    },
    h3: (props) => { 
      console.log(props)
      return <h4 {...props} className="text-lg md:text-xl font-extrabold font-sans">{props.children}</h4>
    },  
  }
}