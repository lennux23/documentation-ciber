---
title: Progress bar
---

## Inicio

Utilizamos el progress bar para mostrar el progreso de una operación.

- Usamos el `.progress` como contenedor.
- Por dentro va `.progress-bar` para indicar el progreso hasta ahora.
- El `.progress-bar` requiere un estilo en línea.
- El `.progress-bar` también requiere algunos roley atributos para hacerlo accesible.

Estos son algunos ejemplos:

```html
<div class="progress">
  <div
    class="progress-bar"
    role="progressbar"
    aria-valuenow="0"
    aria-valuemin="0"
    aria-valuemax="100"
  ></div>
</div>
<div class="progress">
  <div
    class="progress-bar"
    role="progressbar"
    style="width: 25%"
    aria-valuenow="25"
    aria-valuemin="0"
    aria-valuemax="100"
  ></div>
</div>
<div class="progress">
  <div
    class="progress-bar"
    role="progressbar"
    style="width: 50%"
    aria-valuenow="50"
    aria-valuemin="0"
    aria-valuemax="100"
  ></div>
</div>
<div class="progress">
  <div
    class="progress-bar"
    role="progressbar"
    style="width: 75%"
    aria-valuenow="75"
    aria-valuemin="0"
    aria-valuemax="100"
  ></div>
</div>
<div class="progress">
  <div
    class="progress-bar"
    role="progressbar"
    style="width: 100%"
    aria-valuenow="100"
    aria-valuemin="0"
    aria-valuemax="100"
  ></div>
</div>
```

<progressbar></progressbar>

## Etiquetas

Puedes agregar etiquetas colocando exto dentro de `.pogress.bar`.

```html
<div class="progress">
  <div
    class="progress-bar"
    role="progressbar"
    style="width: 25%;"
    aria-valuenow="25"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    25%
  </div>
</div>
```

<progressbar2></progressbar2>

## Cambiar fondo

Podemos utilizar nuestras clases de utilidad para cambiar los colores.

```html
<div class="progress">
  <div
    class="progress-bar bg-success"
    role="progressbar"
    style="width: 25%"
    aria-valuenow="25"
    aria-valuemin="0"
    aria-valuemax="100"
  ></div>
</div>
<div class="progress">
  <div
    class="progress-bar bg-info"
    role="progressbar"
    style="width: 50%"
    aria-valuenow="50"
    aria-valuemin="0"
    aria-valuemax="100"
  ></div>
</div>
<div class="progress">
  <div
    class="progress-bar bg-warning"
    role="progressbar"
    style="width: 75%"
    aria-valuenow="75"
    aria-valuemin="0"
    aria-valuemax="100"
  ></div>
</div>
<div class="progress">
  <div
    class="progress-bar bg-danger"
    role="progressbar"
    style="width: 100%"
    aria-valuenow="100"
    aria-valuemin="0"
    aria-valuemax="100"
  ></div>
</div>
```

<progressbar3></progressbar3>

## Barras multiples

Podemos tener varias barras en un `progress-bar` si es que nos es necesario.

```html
<div class="progress">
  <div
    class="progress-bar"
    role="progressbar"
    style="width: 15%"
    aria-valuenow="15"
    aria-valuemin="0"
    aria-valuemax="100"
  ></div>
  <div
    class="progress-bar bg-success"
    role="progressbar"
    style="width: 30%"
    aria-valuenow="30"
    aria-valuemin="0"
    aria-valuemax="100"
  ></div>
  <div
    class="progress-bar bg-info"
    role="progressbar"
    style="width: 20%"
    aria-valuenow="20"
    aria-valuemin="0"
    aria-valuemax="100"
  ></div>
</div>
```

<progressbar4></progressbar4>

## Rayas animadas

El degradado rayadose puede animar. Agregue `.progress-bar-animateda` a `.progress-bar`para animar las franjas de derecha a izquierda a través de animaciones CSS3.

```html
<div class="progress">
  <div
    class="progress-bar progress-bar-striped progress-bar-animated"
    role="progressbar"
    aria-valuenow="75"
    aria-valuemin="0"
    aria-valuemax="100"
    style="width: 75%"
  ></div>
</div>
```

<progressbar5></progressbar5>
