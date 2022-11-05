export default {
    name: 'link',
    title: 'Links',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'url',
        title: 'URL',
        type: 'url',
      },
      {
        name: 'blurb',
        title: 'Blurb',
        type: 'blockContent'
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      },  
    ],
    preview: {
      select: {
        title: 'name',
        url: 'url'
      },
      prepare(selection) {
        const {url} = selection
        return Object.assign({}, selection, {
          subtitle: url && `${url}`,
        })
      },  
    },
  }
  