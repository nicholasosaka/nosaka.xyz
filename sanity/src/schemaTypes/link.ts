import {defineField, defineType} from 'sanity'

export const link = defineType({
  name: 'link',
  title: 'Links',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'blurb',
      title: 'Blurb',
      type: 'blockContent',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      url: 'url',
    },
    prepare(selection) {
      const {url} = selection
      return Object.assign({}, selection, {
        subtitle: url && `${url}`,
      })
    },
  },
})
