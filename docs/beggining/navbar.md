---
title: Navbar
---

## Inicio

Las barras de navegación son flexibles y muy funcionales para cualquier tipo de pagina.

## ¿Cómo funciona?

Esto es lo que necesita saber antes de comenzar con la barra de navegación:

- Navbars requieren un envoltorio `.navbar` con `.navbar-expand{-sm|-md|-lg|-xl}` para plegar al tamaño deseado.
- Las Navbar abarcan todo el largo por completo, puedes usar contenedores para darle cierta medida.

## ¿Para qué las podriamos utilizar?

- `.navbar-brand` serviria para una empresa o un producto.
- `.navbar-nav` Para tener soporte para un menu desplegable.
- `.navbar-toggler` y podremos utilizar un complemento de colapso.
- `.form-inline` para cualquier forma de controles y acciones.
- `.navbar-text` para agregar cadenas de texto centradas verticalmente.
- .`collapse.navbar-collapse` para ocultar el contenido de la barra de navegación por un punto de corte.
  Ejemplo:

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
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
          >Home <span class="sr-only">(current)</span></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
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
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </div>
</nav>
```
