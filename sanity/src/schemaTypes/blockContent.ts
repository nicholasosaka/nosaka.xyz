import {defineType} from 'sanity'

export const blockContent = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'},
          {
            title: 'Highlight',
            value: 'highlight',
          },
          {
            title: 'Underline',
            value: 'underline',
          },
          {
            title: 'Strikethrough',
            value: 'strikethrough',
          },
          {
            title: 'Superscript',
            value: 'superscript',
          },
          {
            title: 'Subscript',
            value: 'subscript',
          },
        ],
      },
    },
    {
      type: 'image',
      options: {hotspot: true},
    },
    {
      type: 'object',
      name: 'seperator',
      fields: [
        {
          name: 'visible',
          type: 'boolean',
        },
      ],
    },
    {
      type: 'object',
      name: 'Button',
      fields: [
        {
          name: 'uri',
          type: 'text',
        },
        {
          name: 'title',
          type: 'text',
        },
      ],
    },
  ],
})
