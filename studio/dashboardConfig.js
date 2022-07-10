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
                  buildHookId: '62cb61ae01f49e1b49309b68',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ghcua417',
                  apiId: 'bd832ea0-6210-4214-8f67-69f3a972a1ac'
                },
                {
                  buildHookId: '62cb61aed203bd17e6b20315',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-biwwd3qi',
                  apiId: 'a6e2a219-7bdf-4363-8848-f011a87f791d'
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
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-biwwd3qi.netlify.app', category: 'apps'}
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
