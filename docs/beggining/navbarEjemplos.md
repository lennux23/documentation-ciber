---
title: Ejemplos de navbar
---

## Cómo hacer una Navbar personalizada

Aquí encontraremos algunos ejemplos de como lucen las navbars en Bootstrap

- Navbar
- Navbar con etiquetas de formulario

```html
<nav class="p-2 navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">Navbar</a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#"
          >Inicio <span class="sr-only">(current)</span></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">SubPag</a>
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Acción</a>
          <a class="dropdown-item" href="#">Otra Acción</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Otra Acción</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Desactivado</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Buscar"
        aria-label="Search"
      />
      <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
        Buscar
      </button>
    </form>
  </div>
</nav>
```

<navbarEjemplos></navbarEjemplos>

### Navbar con etiquetas de formulario

Podemos utilizar las etiquetas `<Form>` Para crear una navbar y darle imagen al estilo FORM

```html
<nav class="navbar navbar-light bg-danger p-2">
  <form class="form-inline">
    <input
      class="form-control mr-sm-2"
      type="search"
      placeholder="Buscar"
      aria-label="Search"
    />
    <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">
      Buscar
    </button>
  </form>
</nav>
```

<navbarEjemplo1></navbarEjemplo1>
