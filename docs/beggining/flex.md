---
title: Flex 
---


## Flex con Bootstrap
Habilitar comportamientos flexibles
Aplique displayutilidades para crear un contenedor de flexbox y transformar elementos secundarios directos en elementos flexibles. Los contenedores y artículos flexibles se pueden modificar aún más con propiedades flexibles adicionales.
Existen algunas variaciones:
- .d-flex
- .d-inline-flex
- .d-sm-flex
- .d-sm-inline-flex
- .d-md-flex
- .d-md-inline-flex
- .d-lg-flex
- .d-lg-inline-flex
- .d-xl-flex
- .d-xl-inline-flex

## Direccion
Establezca la dirección de los elementos flexibles en un contenedor flexible con utilidades de dirección. En la mayoría de los casos, puede omitir la clase horizontal aquí, ya que el valor predeterminado del navegador es row. Sin embargo, puede encontrar situaciones en las que necesita establecer explícitamente este valor (como diseños receptivos).
Utiiza .flex-rowpara establecer una dirección horizontal (el valor predeterminado del navegador) o .flex-row-reversepara iniciar la dirección horizontal desde el lado opuesto.

Establezca la dirección de los elementos flexibles en un contenedor flexible con utilidades de dirección. En la mayoría de los casos, puede omitir la clase horizontal aquí, ya que el valor predeterminado del navegador es row. Sin embargo, puede encontrar situaciones en las que necesita establecer explícitamente este valor (como diseños receptivos).

Utilícelo .flex-rowpara establecer una dirección horizontal (el valor predeterminado del navegador) o .flex-row-reversepara iniciar la dirección horizontal desde el lado opuesto.
También existen variaciones receptivas para flex-direction.

- .flex-row
- .flex-row-reverse
- .flex-column
- .flex-column-reverse
- .flex-sm-row
- .flex-sm-row-reverse
- .flex-sm-column
- .flex-sm-column-reverse
- .flex-md-row
- .flex-md-row-reverse
- .flex-md-column
- .flex-md-column-reverse
- .flex-lg-row
- .flex-lg-row-reverse
- .flex-lg-column
- .flex-lg-column-reverse
- .flex-xl-row
- .flex-xl-row-reverse
- .flex-xl-column
- .flex-xl-column-reverse

## Alineaciòn de contenido Vertical
Use las align-itemsutilidades en los contenedores de flexbox para cambiar la alineación de los elementos flexibles en el eje transversal (el eje y para comenzar, el eje x si flex-direction: column). Elegir start, end, center, baseline, o stretch(por defecto del navegador).
```html
<div class="d-flex align-items-start">...</div>
<div class="d-flex align-items-end">...</div>
<div class="d-flex align-items-center">...</div>
<div class="d-flex align-items-baseline">...</div>
<div class="d-flex align-items-stretch">...</div>```
Artículo flexible
### Alineamiento vertical
```html
<div class="container">
  <div class="row align-items-start">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
  <div class="row align-items-end">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
</div>
```

## Justificar contenido Horizontal
Utilice las justify-contentutilidades en los contenedores de flexbox para cambiar la alineación de los elementos flexibles en el eje principal (el eje x para comenzar, el eje y si flex-direction: column). Elegir start(por defecto del navegador), end, center, between, o around.
```html
<div class="d-flex justify-content-start">...</div>
<div class="d-flex justify-content-end">...</div>
<div class="d-flex justify-content-center">...</div>
<div class="d-flex justify-content-between">...</div>
<div class="d-flex justify-content-around">...</div>
```
También existen variaciones receptivas para justify-content.

- .justify-content-start
- .justify-content-end
- .justify-content-center
- .justify-content-between
- .justify-content-around
- .justify-content-sm-start
- .justify-content-sm-end
- .justify-content-sm-center
- .justify-content-sm-between
- .justify-content-sm-around
- .justify-content-md-start
- .justify-content-md-end
- .justify-content-md-center
- .justify-content-md-between
- .justify-content-md-around
- .justify-content-lg-start
- .justify-content-lg-end
- .justify-content-lg-center
- .justify-content-lg-between
- .justify-content-lg-around
- .justify-content-xl-start
- .justify-content-xl-end
- .justify-content-xl-center
- .justify-content-xl-between
- .justify-content-xl-around