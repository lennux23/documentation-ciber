module.exports = {
  title: 'Proyecto SAM',
  description: "Documentación técnica SAM ",
  markdown: {
    lineNumbers: false 
  },
  plugins: ['vuepress-plugin-export'],
  themeConfig:{
    nav: [
        { text: 'SAM', link: '/beggining/' },
    ],
    sidebar: [
        {
          title: 'SAM',
          collapsable: false,
          children: [
            '/beggining/introduction',
            '/beggining/getting-started',
          ]
        }
    ]
  }
}