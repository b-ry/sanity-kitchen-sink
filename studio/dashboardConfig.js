export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '630413d58da7a61e6806fa17',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-xmdms6qk',
                  apiId: '26a57a4e-98fe-4111-b8f8-7a076c2ebe98'
                },
                {
                  buildHookId: '630413d5c240b11fec83c4c3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-revqd1f7',
                  apiId: '340149d0-9503-44cb-b74a-774ddc3eb200'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/b-ry/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-revqd1f7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
