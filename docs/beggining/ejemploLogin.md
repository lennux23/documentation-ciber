---
title: Loging
---

## Ejemplo de login

En el siguiente ejemplo utilizamos una etiqueta `<card>` y dentro de esta utilizamos la etiquetas `<form>` para crear un grupo de formularios y mediante las clases de Bootstrap darle posicionamiento y estilo

```html
<div class="card bg-dark text-white">
  <img
    src="https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png"
    alt="User Icon"
    class="img-fluid imagen-logo align-self-center mt-5"
    style="height: 150px;"
  />
  <hr class="w-75 align-self-center" />
  <form>
    <div class="card-body">
      <h5 class="card-title">Bienvenido de nuevo</h5>
      <div class="form-group">
        <label for="">Correo electronico</label>
        <input
          type="email"
          class="form-control"
          name=""
          id="correo"
          aria-describedby=" emailHelpId"
          placeholder="Correo electronico"
        />
      </div>
      <div class="form-group"></div>
      <label for="">Contraseña</label>
      <input
        type="password"
        class="form-control"
        name=""
        id="contraseña"
        placeholder="Contraseña"
      />
    </div>
    <div class="form-group">
      <div class="d-flex" style="justify-content:center;">
        <button class="btn btn-primary">Entrar</button>
      </div>
    </div>
  </form>
</div>
```

<login></login>
