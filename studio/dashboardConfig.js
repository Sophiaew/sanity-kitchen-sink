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
                  buildHookId: '609ac2a3b878ee00e032e826',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-cqcsq776',
                  apiId: '56b5e2bc-49fa-42b5-9ca4-1dbe4d02f9ce'
                },
                {
                  buildHookId: '609ac2a3b0795b00bb096a5d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-hzp3xpgj',
                  apiId: '3de0bcc2-8008-4437-b14e-39cb6eeb7b29'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Sophiaew/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-hzp3xpgj.netlify.app', category: 'apps'}
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
