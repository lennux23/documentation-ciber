---
title: Formulario
---

## Ejemplos

### Algunos ejemplos de formularios que podemos lograr de manera veloz con Bootstrap

- Formulario de identidicación
- Formulario de contacto
- Formularios de validación
- Opciones para formularios

### Ejemplo de formulario de identificación

```html
<div class="bg-primary p-5 text-white">
  <div class="text-center">
    <h1>Formulario</h1>
  </div>
  <form role="form">
    <div class="form-group">
      <label for="email">Correo electronico:</label>
      <input type="email" class="form-control" id="email" />
    </div>
    <div class="form-group">
      <label for="pwd">Contraseña:</label>
      <input type="password" class="form-control" id="pwd" />
    </div>
    <button type="submit" class="btn btn-secondary">Accede</button>
  </form>
</div>
```

<formulario></formulario>

### Formulario de conacto

```html
<div>
  <div class="bg-info text-white p-5">
    <section class="mb-4">
      <h2 class="h1-responsive font-weight-bold text-center my-4">
        Contactanos
      </h2>
      <p class="text-center w-responsive mx-auto mb-5">
        Somo una empresa para realizar proyectos, contactanos ahora!
      </p>
      <div class="row">
        <div class="col-md-9 mb-md-0 mb-5">
          <form name="contact-form" action="mail.php" method="POST">
            <div class="row">
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <input type="text" name="name" class="form-control" />
                  <label for="name" class="">Nombre</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <input type="text" name="email" class="form-control" />
                  <label for="email" class="">Correo Electronico</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <input type="text" class="form-control" />
                  <label class="">Tema</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="md-form">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    class="form-control md-textarea"
                  ></textarea>
                  <label for="message">Mensaje para contacto</label>
                </div>
              </div>
            </div>
          </form>
          <div class="text-center flex text-md-left">
            <a class="btn btn-success">Enviar</a>
          </div>
        </div>
        <div class="col-md-3 text-center">
          <ul class="list-unstyled mb-0">
            <li>
              <p>Ciudad de México</p>
            </li>

            <li>
              <p>+52 5521435677</p>
            </li>

            <li>
              <p>Alex@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</div>
```

<formularioEjemplo></formularioEjemplo>

### Formularios de validación

```html
<div class="form-group ">
        <label for="validation01">Nombre</label>
        <input
          type="text"
          class="form-control is-valid"
          placeholder="Nombre"
          value="Peter"
          required
        />
      </div>
      <div class="form-group">
        <label for="validation02">Ciudad</label>
        <input
          type="text"
          class="form-control is-invalid"
          placeholder="Ciudad"
          required
        />
      </div>
    </form>
  </div>
```

<FormularioValidacion></FormularioValidacion>

### Opciones para formularios

```html
<div class="bg-danger text-white p-5">
  <div class="radio">
    <label for="" class="radio-inline"> <input type="radio" /> opcion 1 </label>
  </div>
  <div class="radio">
    <label for="" class="radio-inline"> <input type="radio" /> opcion 2 </label>
  </div>
  <div class="radio">
    <label for="" class="radio-inline"> <input type="radio" /> opcion 3 </label>
  </div>
</div>
```

<formularioEjemplo2></formularioEjemplo2>
