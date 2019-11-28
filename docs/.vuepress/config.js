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
        },
        {
          text: 'Main Guide',
          link: '/more-text',
        },
      ],
      sidebar: {
        '/': [
          {
            title: 'Home',
            collapsable: false,
            children: ['/', 'custom/'],
          },
          {
            title: 'Markdown stuff',
            collapsable: false,
            children: [
              'more-text',
            ],
          }
        ],
      },
    },
  }