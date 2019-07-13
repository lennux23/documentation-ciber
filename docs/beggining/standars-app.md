---
title: Estandares
---

# Estandares

Con el conocimiento de los siguientes estandares se busca tener un código mejor estructurado y compresible de manera que, resulte sencillo escalarlo y darle mantenimiento en futuras versiones.

## Conveción para fijar nombres de variables

Se recomienda seguir las siguientes reglas al momento de nombrar los distintos elementos que se vayan desarrollando dentro del sistema. De esta forma sera mas sencillo darle mantenimiento a nuestro código en el futuro.



### Usar idioma ingles como estandar
Esto nos permitirá evitar problemas al compilar en los distintos lenguajes, ya que omitiría el uso de variables que contengan caracteres especiales como la `ñ` ó un acento. Si en determinado momento desconocen como se escribe cierta palabra, siempre existe San Google :grinning:.


### Nombre de variables
También es importante que al determinar el nombre de la variable consideremos los siguientes estándares globales en programación.

::: danger Importante
Nunca nombrar variables con nombres poco explícitos. Por ejemplo `variable2`
:::

#### Uso de camelCase
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
#### Uso de PascalCase
  * Nombre de archivo `.vue`
  * Clases Javascript.
  * Nombre de componentes `Vue`.
  ```javascript
  // declarando la clase Perro
  class Perro {
    ...
  }
  ```

 ```js
  // el nombre del componente empieza con mayuscula (Modal)
  import Modal from 'src/components/UIComponents/Modal.vue'
  ```
  
#### Uso de kebbal-case
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

#### Uso de UPPERCASE
  * Usarla en el nombre de los métodos de mutaciones `Vuex`.
  * Al declarar constantes en Javascript.
  ``` js
  // constante master key en js
  MASTER_KEY = "123"
  // mutación de vuex
  ADD_SUBRISK(state, data){
    ...
  },
  ```

## Punto y coma al final de cada linea.
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
  
  Esto se debe a que, de acuerdo a la **regla #1** del [ASI](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion), el motor de Javascript comenzará a parsear el código de derecha a izquierda hasta encontrar un token (llamado _offending token_). Dicho _offending token_ es encontrado en la linea 2 al leer la palabra `const` y por lo tanto agrega un _semicolon_ al final de la linea 1. De igual forma agrega un _semicolon_ al final de la linea 2. Pero cuando parsea la linea 3 y llega al final de dicha linea, el token encontrado en despues de `b` es un `[`, el cual es valido para el motor. Por lo tanto, lo interpreta como `b[1,2,3]` y dado que `b[1,2,3]` es indefido, manda error.


  Por lo tanto es conveniente que conozcan bajo que circustancias usar el _semicolon_. [Aquí](https://codeburst.io/ecmascript-automatic-semicolon-insertion-50f09091e377) se explica mas a detalle cada regla. 



## Buenas prácticas

### Generar nuevas variables 

### Plugin ESLint 
  El plugin que 

## PRO Tips

### Mutar o no mutar
### Operador Spread 
### Objectos JSON



