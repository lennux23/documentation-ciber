---
title: Buenas practicas
---

# Buenas practicas

Con el conocimiento de los siguientes tips se busca tener un código mejor estructurado y compresible de manera que, resulte sencillo escalarlo y darle mantenimiento en futuras versiones.

## Nombre de variables
Se recomienda seguir las siguientes reglas al momento de nombrar los distintos elementos que se vayan desarrollando dentro del sistema. De esta forma sera mas sencillo darle mantenimiento a nuestro código en el futuro.



### Declarar la varieble en Ingles
Esto nos permetira evitar problemas 


 Los casos de uso se describen a continuación.

> There are only two hard problems in Computer Science: cache invalidation and naming things — Phil Karlton

### camelCase
  * En nombre de archivos `.js`.
  * Variables, funciones, metodos  Javascript.
  ```javascript
  // al declarar nuevas variables
  var newVar = "Hello"
  // al declarar nuevas funciones
  printNewVar(newVar) {
    ...
  }
  ```
### PascalCase
  * Nombre de archivo `.vue`
  * Clases Javascript.
  ```javascript
  // declarando la clase Perro
  class Perro {
    ...
  }
  ```
### kebbal-case
  * Componentes propios de Vue. 
  * En clases CSS. 
  * Nombre de ramas de `git`.
  ```html
  <!-- template propio en Vue-->
  <action-plan>  </action-plan>
  ```
  ```css
  /* clase css  */
  .red-box {border: 1px solid red;}
  ```
  ```
  // rama desarrollo de moduleId
  origin/dev-moduleId
  ```

### UPPERCASE
  * Usarla en el nombre de los métodos de mutaciones `Vuex`.
  * Al declarar constantes en Javascript.
  ``` js
  // variable master key en js
  MASTER_KEY = "123"
  // mutación de vuex
  ADD_SUBRISK(state, data){
    ...
  },
  ```
<counter></counter>

## Uso de semicolon al final de cada linea.
  El uso del simbolo `;` (semicolon),  en javascript es opcional, sin embargo, en algunas ocasiones se pueden provocar efectos inesperados si no se entienden las reglas de operación del **Automatic Semicolon Insertion** [ (ASI)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion) que posee el motor de Javascript.  

  Por ejemplo, al ejecutarse el siguiente código
  
  ``` js
  const a = 5
  const b = 10
  const c = a + b
  [1, 2, 3].forEach((e) => console.log(e))
  ```
  arrojará el siguiente resultado
  ```  
  [1, 2, 3].forEach((e) => console.log(e))
           ^
  TypeError: Cannot read property 'forEach' of undefined 
  ``` 
  
  Esto se debe a que, de acuerdo a la **regla #1** del [ASI](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion), el motor de Javascript comenzará a parsear el código de derecha a izquierda hasta encontrar un token (llamado _offending token_). Dicho _offending token_ es encontrado por el motor en la linea 2 al leer la palabra `const` y por lo tanto agrega un _semicolon_ al final de la linea 1. De igual forma agrega un _semicolon_ al final de la linea 2. Pero cuando parsea la linea 3 y llega al final de dicha linea, el token encontrado en despues de `b` es un `[`, el cual es valido. Por lo tanto el motor interpreta esto como `b[1,2,3]` y dado que `b[1,2,3]` es indefido, manda error.


  Por lo tanto es conveniente que conozcan en bajo que circustancias usar el _semicolon_. [Aquí](https://codeburst.io/ecmascript-automatic-semicolon-insertion-50f09091e377) se explica mas a detalle cada regla. 



## Vue in Markdown, Splendido!!
Cras euismod venenatis nulla sed fermentum. Etiam venenatis vestibulum metus at rhoncus. Aenean et ex libero. Vivamus dapibus nulla eget nisi elementum, in gravida purus eleifend. Integer id scelerisque ligula. Nulla sit amet odio nisl. Suspendisse tempor risus eget nunc dictum, at placerat turpis malesuada. Aenean sit amet accumsan diam, ultricies facilisis odio. Aenean nec iaculis ipsum. Maecenas finibus pulvinar leo, quis viverra quam. Duis ipsum augue, hendrerit in semper vel, dapibus eu diam. Nulla laoreet rutrum enim vehicula maximus. Vivamus porta congue justo, quis ullamcorper purus pellentesque ac. Aliquam sagittis leo nec consequat vulputate.


