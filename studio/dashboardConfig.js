export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f321b82553221f9ae1fb639',
                  title: 'Sanity Studio',
                  name: 'portfolio-studio-zaz1syv9',
                  apiId: '4c4e156a-0449-42a1-b949-7a53f8beb078'
                },
                {
                  buildHookId: '5f321b823a5cbbf3d693bb94',
                  title: 'Portfolio Website',
                  name: 'portfolio-web-q88ypzcz',
                  apiId: 'e8b85f97-3435-4bc8-b8c5-f36eea8bc9c3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mandarkx/portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://portfolio-web-q88ypzcz.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
