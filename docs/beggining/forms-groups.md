---
title: Forms Group
---

## Introducción

Los forms groups se utilizan para el diseño y el control de **Fromularios**.  
**Es una manera de facilitar el uso y creación de ellos gracias a el uso de sus clases en Bootstrap**  
Utiliza un type atributo apropiado en todas las entradas por ejemplo, email para la dirección de correo electrónico.

## ¿Cómo funciona?

A continuación un ejemplo de como se estiliza solo agregando la clase `.dorm-group`, usando `type=''` y un `id:`, con los atributos hacen que tambien se pida la validación.

```html
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Correo electronico</label>
    <input
      type="email"
      class="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Introduce tu correo"
    />
    <small id="emailHelp" class="form-text text-muted"
      >Tu correo electronico personal</small
    >
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Contraseña</label>
    <input
      type="password"
      class="form-control"
      id="exampleInputPassword1"
      placeholder="Contraseña"
    />
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Recuerdame</label>
  </div>
  <button type="submit" class="btn btn-primary">Entrar</button>
</form>
```

<formgroup></formgroup>

## Dimensionamiento

Establecer alturas usando clases como `.form-control-lg` y `.form-control-sm.`

```html
<input
  class="form-control form-control-lg"
  type="text"
  placeholder=".form-control-lg"
/>
<input class="form-control" type="text" placeholder="input por defecto" />
<input
  class="form-control form-control-sm"
  type="text"
  placeholder=".form-control-sm"
/>
```

<formgroup3></formgroup3>

## Texto simple de solo lectura

Si desea que los `<input read only>`elementos de su formulario tengan el estilo de texto sin formato, use la `.form-control-plaintext` clase para eliminar el estilo de campo de formulario predeterminado y conservar el margen y el relleno correctos.

```html
<form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Correo</label>
    <div class="col-sm-10">
      <input
        type="text"
        readonly
        class="form-control-plaintext"
        id="staticEmail"
        value="email@example.com"
      />
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label"
      >Contraseña</label
    >
    <div class="col-sm-10">
      <input
        type="password"
        class="form-control"
        id="inputPassword"
        placeholder="Password"
      />
    </div>
  </div>
</form>
```

<formgroup4></formgroup4>

## Casillas de verificación y radios

Una casilla de verificación la llamamos con la clase `.form-check,` esta clase mejora la distribución de espacio para dar una mejor apariencia, Las casillas de verificación son para seleccionar una o varias opciones en una lista.

Las casillas de verificación y las radios deshabilitadas son compatibles, el padre `<label>`, deberá agregar el disable datributo al .`form-check-input`.

Las casillas de verificación y el uso de radios están diseñados para admitir la validación de formularios basada en HTML y proporcionar etiquetas concisas y accesibles. Como tal, nuestros `<input>`s y `<label>`s son elementos de hermanos en lugar de un `<input>`plazo de un `<label>`. Esto es un poco más detallado ya que debe especificar idy foratributos para relacionar el `<input>` y `<label>`.

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
  <label class="form-check-label" for="defaultCheck1">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input
    class="form-check-input"
    type="checkbox"
    value=""
    id="defaultCheck2"
    disabled
  />
  <label class="form-check-label" for="defaultCheck2">
    Disabled checkbox
  </label>
</div>
```

<formgroup5></formgroup5>

## Dimencionamiento automatico

utiliza flexbox para centrar verticalmente el contenido y los cambios `.col` para `.col-aut` o que sus columnas solo ocupen tanto espacio como sea necesario. Dicho de otra manera, la columna se dimensiona en función del contenido.

```html
<form>
  <div class="form-row align-items-center">
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInput">Name</label>
      <input
        type="text"
        class="form-control mb-2"
        id="inlineFormInput"
        placeholder="Jane Doe"
      />
    </div>
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input
          type="text"
          class="form-control"
          id="inlineFormInputGroup"
          placeholder="Username"
        />
      </div>
    </div>
    <div class="col-auto">
      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" id="autoSizingCheck" />
        <label class="form-check-label" for="autoSizingCheck">
          Remember me
        </label>
      </div>
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-2">Submit</button>
    </div>
  </div>
</form>
```

<formgroup6></formgroup6>
