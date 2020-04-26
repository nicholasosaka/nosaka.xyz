import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '6hr0ab4g',
  dataset: 'production',
  useCdn: false
})