module.exports = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  async redirects() {
    return [
      {
        source: '/cv',
        destination: '/cv.pdf',
        permanent: true,
      },
      {
        source: '/resume',
        destination: '/resume.pdf',
        permanent: true
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/nicholasosaka',
        permanent: true
      },
      {
        source: '/github',
        destination: 'https://github.com/nicholasosaka',
        permanent: true
      }

    ]
  },
}
