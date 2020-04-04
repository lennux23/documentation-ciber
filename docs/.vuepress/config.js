module.exports = {
  title: "Boostrap 4",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      }
    ]
  ],
  description: "Documentación técnica Boostrap 4 ",
  markdown: {
    lineNumbers: false
  },
  plugins: ["vuepress-plugin-export"],
  themeConfig: {
    nav: [
      { text: "INICIO", link: "/beggining/introduction" },
      { text: "MANUAL", link: "/beggining/alineacion-texto" },
      { text: "EJEMPLOS", link: "/beggining/ejemplos" }
    ],
    sidebar: [
      {
        title: "Inicio",
        collapsable: false,
        children: ["/beggining/introduction", "/beggining/fmf"]
      },
      {
        title: "Guía de Bootstrap 4",
        collapsable: false,
        children: [
          "/beggining/alineacion-texto",
          "/beggining/colores",
          "/beggining/padding",
          "/beggining/altos-anchos",
          "/beggining/botones",
          "/beggining/list",
          "/beggining/contextuales",
          "/beggining/navbar",
          "/beggining/dropdown",
          "/beggining/alertas",
          "/beggining/progress-bar",
          "/beggining/container",
          "/beggining/input",
          "/beggining/forms-groups",
          "/beggining/Grid",
          "/beggining/cards",
          "/beggining/flex"
        ]
      },
      {
        title: "Ejemplos",
        collapsable: false,
        children: [
          "/beggining/formulario-ejem",
          "/beggining/ejemplos",
          "/beggining/navbar-personalizada",
          "/beggining/listado-dproductos"
        ]
      }
    ]
  }
};
