---
title: Loging
---
## ¿Cómo hacer un login?
- Usaremos una plantilla predeterminada  para hacer un formulario estilo login
- Haremos un diseño de tarjeta
- Utilizaremos el sistema grid así como las clases estilizadas de Bootstrap 4
Lo primero que haremos es agregar un grupo de entrada ``.form-grop``
Ejemplo:
```html
<form>
 <div class="form-group">
    <label for="">Correo electronico</label>
    <input type="email" class="form-control" name="" id="correo" aria-describedby=" emailHelpId"
         placeholder="Correo electronico">
</div>
<div class="form-group"></div>
    <label for="">Contraseña</label>
    <input type="password" class="form-control" name="" id="contraseña" placeholder="Contraseña">
</div>
</form>
```
<usuario></usuario>
El paso siguiente sera hacer un boton, usaremos las clases .btn .btn-primary para mejorar la presentación , estará dentro de un ``<div>`` con la clase ``.form-group`` y lo metemos dentro de la etiqueta ``<form>``
```html
 <div class="form-group">
     <div class="boton d-flex" style="justify-content:center;">
        <button class="btn btn-primary">Entrar</button>
    </div>
</div>
```
<usuario2></usuario2>
El proceso realizado en los pasos anteriores estará dentro de 
``<div class='card'>``
El resultado será el siguiente:
```html
<div class="card">
    <form>
        <div class="card-body">
              <h5 class="card-title">Bienvenido de nuevo</h5>
            <div class="form-group">
                <label for="">Correo electronico</label>
                <input type="email" class="form-control" name="" id="correo" aria-describedby=" emailHelpId"
                  placeholder="Correo electronico">
            </div>
            <div class="form-group"></div>
              <label for="">Contraseña</label>
              <input type="password" class="form-control" name="" id="contraseña" placeholder="Contraseña">
            </div>
            <div class="form-group">
                <div class="d-flex" style="justify-content:center;">
                <button class="btn btn-primary">Entrar</button>
              </div>
            </div>
        </div>
    </form>
</div>
```
<usuario3></usuario3>
A continuación agregaremos una imagen y un ``<hr>`` que hemos estilizado para dar un mejor aspecto, va al inicio dentro de nuestra tarjeta. Nota: Con este proceso también estamos dando el tamaño deseado a la imagen
```html
  <img src="descarga.png" alt="User Icon" class="img-fluid imagen-logo align-self-center" style="height: 150px;"/>
    <hr class="w-75 align-self-center">
```
El ``.form-group`` lo meteremos dentro de un card-body para dar buena alineación a nuestros grupos de entrada y crearemos un ``.card-title`` que ira dentro del ``card-body.`` El resultado será el siguiente:
```html
 <div class="card">
          <img src="descarga.png" alt="User Icon" class="img-fluid imagen-logo align-self-center" style="height: 150px;"/>
          <hr class="w-75 align-self-center">
    <form>
        <div class="card-body">
              <h5 class="card-title">Bienvenido de nuevo</h5>
              <div class="form-group">
                <label for="">Correo electronico</label>
                <input type="email" class="form-control" name="" id="correo" aria-describedby=" emailHelpId"
                  placeholder="Correo electronico">
              </div>
              <div class="form-group"></div>
              <label for="">Contraseña</label>
              <input type="password" class="form-control" name="" id="contraseña" placeholder="Contraseña">
             </div>
              <div class="form-group">
                 <div class="d-flex" style="justify-content:center;">
                 <button class="btn btn-primary">Entrar</button>
              </div>
            </div>
        </div>
    </form>
</div>
```
## Usando sistema grid
Ahora utilizaremos el sistema Grid y todo el contenido de la tarjeta lo envolveremos dentro de una fila .row con la clase ``.h-100`` **Recordar que h-100 da un alto del 100%r** Y crearemos una columna **Las columnas solo pueden ser hijas inmeditas de las filas** a la columna le daremos un ancho de 6 y la desplazaremos tres columnas, utilizando las siguientes clases ``.col-6`` ``.offset-3`` y tambien a la misma columna le daremos un ``my-auto``.  
Lo hecho anteriormente hara que tengamos una mejor estilizacion.
### El resultado final deberia de ser este:
```html
<main class="container h-100 mt-5">
    <div class="row h-100">
      <div class="col-6 offset-3">
        <!-- Contenido de la tarjeta -->
        <div class="card">
          <img src="descarga.png" alt="User Icon" class="img-fluid imagen-logo align-self-center" style="height: 150px;"/>
          <hr class="w-75 align-self-center">
          <form>
            <div class="card-body">
              <h5 class="card-title">Bienvenido de nuevo</h5>
              <div class="form-group">
                <label for="">Correo electronico</label>
                <input type="email" class="form-control" name="" id="correo" aria-describedby=" emailHelpId"
                  placeholder="Correo electronico">
              </div>
              <div class="form-group"></div>
              <label for="">Contraseña</label>
              <input type="password" class="form-control" name="" id="contraseña" placeholder="Contraseña">
            </div>
            <div class="form-group">
              <div class="d-flex" style="justify-content:center;">
                <button class="btn btn-primary">Entrar</button>
              </div>
            </div>
        </div>
        </form>
      </div>
      <!--   FIN DEL CONTENIDO DE LA TARJETA -->
    </div>
    </div>
</main>
```
