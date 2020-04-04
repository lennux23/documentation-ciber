---
title: Listado de productos
---
## Cómo hacer un listado de productos
Bootstrap nos ayuda a crear un listado de productos con una buena vista en tiempo record, solo agregando algunas cuantas clases y utilizando el sistema grid.
1. Crearemos un contenedor ``<main class='container'>`` 
2. Ahora haremos un boton que sera para añadir productos. ``<button class="btn btn-primary">Agregar producto</button>``
3. Crearemos nuestra tabla dentro de una etiqueta ``<table>``dentro de ella agregaremos una etiqueta ``<thead>`` que significa que ahi iran remarcados ``<thead>`` luego en una etiqueta ``<tbody>`` introduciremos todos nuestros items
4. Recuerda que cada item va dentro de la etiqueta ``<th>``
Debera de lucir así:
```html
<main class='container'>
    <div>
        <button class="btn btn-primary">Agregar producto</button>
    </div>
    <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Existencias</th>                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="text-center">1</td>
                        <td>Producto 1</td>
                        <td class="text-right">101</td>
                        <td class="text-right">10</td>                    
                    </tr>
                    <tr>
                        <td class="text-center">2</td>
                        <td>Producto 2</td>
                        <td class="text-right">102</td>
                        <td class="text-right">20</td>                    
                    </tr>
                    <tr>
                        <td class="text-center">3</td>
                        <td>Producto 3</td>
                        <td class="text-right">103</td>
                        <td class="text-right">30</td>                    
                    </tr>
                    <tr>
                        <td class="text-center">4</td>
                        <td>Producto 4</td>
                        <td class="text-right">104</td>
                        <td class="text-right">40</td>                    
                    </tr>
                    <tr>
                        <td class="text-center">5</td>
                        <td>Producto 5</td>
                        <td class="text-right">105</td>
                        <td class="text-right">10</td>                    
                    </tr>
                    <tr>
                        <td class="text-center">6</td>
                        <td>Producto 6</td>
                        <td class="text-right">106</td>
                        <td class="text-right">20</td>                    
                    </tr>
                    <tr>
                        <td class="text-center">7</td>
                        <td>Producto 7</td>
                        <td class="text-right">107</td>
                        <td class="text-right">30</td>                    
                    </tr>
                    <tr>
                        <td class="text-center">8</td>
                        <td>Producto 8</td>
                        <td class="text-right">108</td>
                        <td class="text-right">40</td>                    
                    </tr>
                    <tr>
                        <td class="text-center">9</td>
                        <td>Producto 9</td>
                        <td class="text-right">109</td>
                        <td class="text-right">30</td>                    
                    </tr>
                    <tr>
                        <td class="text-center">10</td>
                        <td>Producto 10</td>
                        <td class="text-right">110</td>
                        <td class="text-right">40</td>                    
                    </tr>
                </tbody>
            </table>
</main>
```
Para estilizarla agregaremos las clases ``.table`` ``.table-bordered`` .``table-striped`` ``.table-hovered`` y con tan solo hacer eso tendremos una mejor estilización.  
Solo le agregamos lo siguiente:
```html
 <table class="table table-bordered table-striped table-hovered">
```
## Usando el sistema grid
Ahora enbolveremos el boton en una fila con la clase ``.row`` y despues en una columna ``.col-6`` para acomodar el boton de cierta forma que este en una buen posicón.
```html
<main class='container'>
 <div class="row mb-5">
            <div class="col-6">
                <button class="btn btn-primary">
                     Agregar producto
                </button>
            </div>
        </div>
        <table class="table table-bordered table-striped table-hovered">
            <thead class="bg-primary text-white">
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Existencias</th>                    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-center">1</td>
                    <td>Producto 1</td>
                    <td class="text-right">101</td>
                    <td class="text-right">10</td>                    
                </tr>
                <tr>
                    <td class="text-center">2</td>
                    <td>Producto 2</td>
                    <td class="text-right">102</td>
                    <td class="text-right">20</td>                    
                </tr>
                <tr>
                    <td class="text-center">3</td>
                    <td>Producto 3</td>
                    <td class="text-right">103</td>
                    <td class="text-right">30</td>                    
                </tr>
                <tr>
                    <td class="text-center">4</td>
                    <td>Producto 4</td>
                    <td class="text-right">104</td>
                    <td class="text-right">40</td>                    
                </tr>
                <tr>
                    <td class="text-center">5</td>
                    <td>Producto 5</td>
                    <td class="text-right">105</td>
                    <td class="text-right">10</td>                    
                </tr>
                <tr>
                    <td class="text-center">6</td>
                    <td>Producto 6</td>
                    <td class="text-right">106</td>
                    <td class="text-right">20</td>                    
                </tr>
                <tr>
                    <td class="text-center">7</td>
                    <td>Producto 7</td>
                    <td class="text-right">107</td>
                    <td class="text-right">30</td>                    
                </tr>
                <tr>
                    <td class="text-center">8</td>
                    <td>Producto 8</td>
                    <td class="text-right">108</td>
                    <td class="text-right">40</td>                    
                </tr>
                <tr>
                    <td class="text-center">9</td>
                    <td>Producto 9</td>
                    <td class="text-right">109</td>
                    <td class="text-right">30</td>                    
                </tr>
                <tr>
                    <td class="text-center">10</td>
                    <td>Producto 10</td>
                    <td class="text-right">110</td>
                    <td class="text-right">40</td>                    
                </tr>
            </tbody>
        </table>
</main>

```