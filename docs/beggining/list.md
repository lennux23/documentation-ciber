---
title: List groups
---

## List Groups
Con los grupos de lista podemos ordenar elementos de una manera muy rapida.   
Ejemplo:
```html
<div class="container">
      <ul class="list-group">
        <li class="list-group-item">Somos elementos de lista</li>
        <li class="list-group-item">Somos elementos de lista</li>
        <li class="list-group-item">Somos elementos de lista</li>
        <li class="list-group-item">Somos elementos de lista</li>
        <li class="list-group-item">Somos elementos de lista</li>
      </ul>
  </div> 
```
<listgroups></listgroups>
### Artículos activos
Agregar ``.active``a ``.list-group-item`` para indicar la selección activa actual.
```html
<div class="container">
    <ul class="list-group">
        <li class="list-group-item">Elemento</li>
        <li class="list-group-item active">Elemento activo</li>
        <li class="list-group-item">Elemento</li>
        <li class="list-group-item">Elemento</li>
        <li class="list-group-item">Elemento</li>
    </ul>
</div>
```
<listgroups2></listgroups2>
### Artículos deshabilitados
Agrega ``.disabled ``a ``.list-group-item`` para que parezca deshabilitado.
```html
<div class="container">
  <ul class="list-group">
      <li class="list-group-item">Elemento</li>
      <li class="list-group-item disabled">Elemento desactivado</li>
      <li class="list-group-item">Elemento</li>
      <li class="list-group-item">Elemento</li>
      <li class="list-group-item">Elemento</li>
  </ul>
</div>
```
<listgroup3></listgroup3>

### Enlaces y botones
Con ``.list-group-ítem-acción.`` Las pseudo clases son separadas para asegurar que los elementos no interactivos contenidos en los grupos de listas no proporcionen un click.
**Asegúrese de no usar las .btn clases estándar aquí .**
```html
<div>
    <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action">Soy un boton </a>
        <a href="#" class="list-group-item list-group-item-action active">Soy un boton activado</a>
        <a href="#" class="list-group-item list-group-item-action">Soy un boton</a>
        <a href="#" class="list-group-item list-group-item-action">Soy un boton</a>
        <a href="#" class="list-group-item list-group-item-action">Soy un boton</a>
    </div>
</div>
```
<listgroup4></listgroup4>
