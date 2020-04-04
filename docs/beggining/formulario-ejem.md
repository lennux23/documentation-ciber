---
title: Formulario
---
## ¿Como hacer un formulario con Bootstrap 4?
- Primero crearemos una etiqueta ``<form>`` donde introduciremos todo el formulario
- haremos 4 ``<div>`` con la clase .form-group
- Dentro de los primeros 2 ``<div>`` crearemos dos etiquetas ``<label>`` ``<input>``
Asi deberan de quedar:
```html
<div class="form-group">
    <label for="txtUsuario">Usuario: </label>                                                                
    <input type="text" class="form-control" id="txtUsuario" name="txtUsuario">                                
</div>
<div class="form-group">
    <label for="txtContraseñia">Contraseña</label>                                
    <input type="text" class="form-control" id="txtContraseñia" name="txtContrasenia">                                
</div>
```
En el tercer div crearemos un checkbox dandole al type='checkbox' dentro de la etiqueta ``<input>`` debe de lucir asi:
```html
 <div class="form-group">                                
    <input type="checkbox" id="chkRecordar">
    <label for="chkRecordar">Recordarme</label>                                
</div>  
```
Al cuarto ``<div>`` le añadiremos un boton con las clases .btn .btn-primary para darle un buen aspecto:
```html
<div class="form-group">
    <button class='btn btn-primary' type="submit">
            Acceder
    </button>
</div>
```
Y uniendo todo el codigo deberiamos obtener un formulario estilizado gracias a las clases de Bootstrap.
```html
<form>
    <div class="form-group">
        <label for="txtUsuario">Usuario: </label>                                                                
        <input type="text" class="form-control" id="txtUsuario" name="txtUsuario">                                
    </div>
    <div class="form-group">
        <label for="txtContraseñia">Contraseña</label>                                
        <input type="text" class="form-control" id="txtContraseñia" name="txtContrasenia">                                
    </div>
    <div class="form-group">                                
        <input type="checkbox" id="chkRecordar">
        <label for="chkRecordar">Recordarme</label>                                
    </div>                            
    <div class="form-group">
        <button class='btn btn-primary' type="submit">
            Acceder
        </button>
    </div>
</form>
```