module.exports = {
    title: 'OST Samenvatting',
    description: 'Samenvatting van het vak OST',
    theme: 'yuu',
    base: '/ost-samenvatting/',
    repo: 'rubennaatje/ost-samenvatting',
    docsDir: 'docs',
    themeConfig: {
      yuu: {
        colorThemes: ['blue', 'red'],
      },
      repo: 'rubennaatje/ost-samenvatting',
      docsDir: 'docs',
      editLinks: true,
      sidebarDepth: 3,
      lastUpdated: true,
      nav: [
        {
          text: 'Home',
          link: '/',
        }
      ],
      sidebar: {
        '/': [
          {
            title: 'Home',
            collapsable: false,
          },
          {
            title: 'Operating Systems',
            collapsable: true,
            children: [
              'operating-systems',
            ],
          }
          {
            title: 'Voorbeeld markdown',
            collapsable: false,
            children: [
              'more-text',
            ],
          }
        ],
      },
    },
  }