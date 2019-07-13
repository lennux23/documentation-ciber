module.exports = {
  title: 'Proyecto PAD',
  description: "Documentación técnica PAD ",
  markdown: {
    lineNumbers: true 
  },
  themeConfig:{
    nav: [
        { text: 'COUNTER', link: '/beggining/' },
        { text: 'GUIDE', link: '/guide/' },
    ],
    sidebar: [
        {
          title: 'Inicio',
          collapsable: false,
          children: [
            '/beggining/introduction',
            '/beggining/getting-started',
            '/beggining/standars-app'
          ]
        },
        {
          title: 'API Guide',
          collapsable: false,
          children: [
              '/guide/guide',
              '/guide/api'
          ]
        }
    ]
  }
}