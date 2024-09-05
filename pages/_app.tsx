import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import { MDXProvider } from '@mdx-js/react'


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <MDXProvider>
      <Component {...pageProps} />
    </MDXProvider>
    <Analytics />
  </>
  )
}
export default MyApp
