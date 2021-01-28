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
                  buildHookId: '6012e50e1768fe18f159294d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-299jfbj9',
                  apiId: 'efcb7d51-b885-4039-8184-04d56b9a9d42'
                },
                {
                  buildHookId: '6012e50f23448f2bd930d162',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-iyiuv55q',
                  apiId: 'aa993be2-ead9-471b-9bc0-8e9335865000'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dylan-authentic/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-iyiuv55q.netlify.app', category: 'apps'}
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
