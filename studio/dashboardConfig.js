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
                  buildHookId: '621d394852cf582cd9e6df8e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-a6v8dke5',
                  apiId: '0aac9902-70df-433b-8c00-1c49297aa034'
                },
                {
                  buildHookId: '621d3948df2ed42c0a4c9c99',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-5hddkxws',
                  apiId: '1c2fd0d3-f990-4287-9ddd-25e8efbe62fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mattmcgiv/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-5hddkxws.netlify.app', category: 'apps'}
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
