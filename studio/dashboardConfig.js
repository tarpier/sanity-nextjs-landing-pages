export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5e3404810d7d3bbe8b4a2cc3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-a6oudwit',
                  apiId: '24d07def-6d37-4385-84e6-78ac84805c56'
                },
                {
                  buildHookId: '5e340481cf42585811de0030',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dgucrpan',
                  apiId: '109bb5e3-feb7-421a-84e3-2d08b30dbfae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tarpier/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dgucrpan.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
