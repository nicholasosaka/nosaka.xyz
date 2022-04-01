/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
 import React from 'react'

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'},
          {
            title: 'Highlight', value: 'highlight',
            blockEditor: {
              icon: () => <span style={{fontWeight: 'bold'}}>H</span>,
              render: (props) => <span style={{ backgroundColor: 'yellow' }}>{props.children}</span>
            }
          },
          {
            title: 'Underline', value: 'underline',
            blockEditor: {
              icon: () => <span style={{fontWeight: 'bold'}}>_</span>,
              render: (props) => <span style={{textDecoration: "underline"}}>{props.children}</span>
            }
          },
          {
            title: 'Strikethrough', value: 'strikethrough',
            blockEditor: {
              icon: () => <span style={{textDecoration: 'line-through'}}>S</span>,
              render: (props) => <span style={{textDecoration: "line-through"}}>{props.children}</span>
            }
          },
          {
            title: 'Superscript', value: 'superscript',
            blockEditor: {
              icon: () => <span>S<sup>x</sup></span>,
              render: (props) => <sup>{props.children}</sup>
            }
          },
          {
            title: 'Subscript', value: 'subscript',
            blockEditor: {
              icon: () => <span>S<sub>x</sub></span>,
              render: (props) => <sub>{props.children}</sub>
            }
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
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
          type: 'boolean'
        }
      ],
    },
    {
      type: 'object',
      name: 'Button',
      fields: [
        {
          name: "uri",
          type: "text",
        },
        {
          name: "title",
          type: "text"
        }
      ]
    },
    ],
}
