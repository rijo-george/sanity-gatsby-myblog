export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e78afffbe1baf41fe7b3393',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-myblog-studio',
                  apiId: 'ea174074-f495-4aed-b00b-7dbc91a22a2a'
                },
                {
                  buildHookId: '5e78afff90508da667a200f6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-myblog',
                  apiId: 'e4d9cb57-c534-4a90-a62f-96843723d721'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rijo-george/sanity-gatsby-myblog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-myblog.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
