export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'GeauxWeisbeck4/sanity-angular-tailwindcss-website1'
      }
    },
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
                  buildHookId: '624ff691d9061e4d85ddc54c',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-tailwindcss-website-1-studio',
                  apiId: '97b5b1a0-26c8-44ae-a8b7-3e61c057b8a6'
                },
                {
                  buildHookId: '624ff69155feec4e771b444a',
                  title: 'Website',
                  name: 'sanity-angular-tailwindcss-website-1',
                  apiId: '607d54a2-a70c-42c5-a952-5cfb6449e342'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GeauxWeisbeck4/sanity-angular-tailwindcss-website1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-tailwindcss-website-1.netlify.app', category: 'apps'}
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
