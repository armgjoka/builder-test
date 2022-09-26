import { Builder } from '@builder.io/react'
import dynamic from 'next/dynamic'

Builder.registerComponent(
  dynamic<never>(() => import('./Text')),
  {
    name: 'TEXT_BLOCK',
    inputs: [
      {
        name: 'hasOptions',
        friendlyName: 'Show More Options',
        type: 'boolean',
        defaultValue: false,
      },
      {
        friendlyName: 'Options',
        name: 'options',
        type: 'object',
        required: true,
        showIf: (options:Map<string, any>) => options.get('hasOptions'),
        subFields: [
          { friendlyName: 'Title', name: 'title', type: 'string', required: true },
          { friendlyName: 'Description', name: 'description', type: 'richText', required: true },
        ],
      },
    ],
  }
)
