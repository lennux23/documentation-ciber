---
title: Introducción
---

# Introducción  
El software desarrollado es un sistema que permite a las organizaciones organizar el tiempo y los recursos en la forma de gestión del Compliance de acuerdo a la norma [ISO19600](https://www.iso.org/standard/62342.html).

Dicho sistema provee soluciones de cumplimientos legales en: 
* Anticorrupción.
* Protección de datos personales. _En progreso_.
* Prevención de lavado de dinero. _En progreso_.
* Subcontratación laboral. _En progreso_.

 
Ademas contara con un portal de noticias, un blog y conexión con sus redes sociales; entre otras cosas. 

## Arquitectura general del proyecto

Por la complejidad del sistema, el código del proyecto se dividió en 3 sub-proyectos. La estructura general de los directorios quedó de la siguiente manera.

```bash
PAD
  ├─ pad-client
  ├─ pad-dashboard
  └─ pad-server

```

Los 3 subproyectos se encuentran alojados dentro de [Gitlab](https://gitlab.com) en el grupo privado **PAD**, y cada uno cuenta con su propio repositorio.

**Ver también**

* [Clonar e instalar por primera vez](/beggining/getting-started.html)



-->Diagrama<-->

### pad-client

En este repositorio esta el código de la **página web**, en donde se detallan las características que puede ofrecer el sistema. Dicha página web también cuenta con un portal de noticias y blog, ademas de permitir ser el primer punto de contacto con el cliente, mediante un formulario de contacto.


### pad-dashboard

Aquí se almacena todo el código del **front-end**, el cual es el encargado de presentar el **sistema principal** de manera visual. La vista tiene como base la plantilla de pago [Vue paper dashboard PRO](https://demos.creative-tim.com/vue-paper-dashboard-pro/#/admin/overview). A su vez, esta plantilla tiene como base el framework _open source_ [ ElementUI](https://element.eleme.io/#/en-US/component/installation). 

::: warning Toma en cuenta
Durante el proceso de desarrollo, varios componentes base de la plantilla fueron alterados para ser adecuados a las necesidades propias del sistema. Por lo cual, la documentación de la plantilla podría estar desactualizada en alguno casos.
:::

Para administrar la navegación entre pantallas se hace uso de la librería [Vue router](https://router.vuejs.org). Las peticiones al back-end, son llevadas a cabo por el cliente [axios](https://github.com/axios/axios), la cual es la librería líder dentro de desarrollos javascript. [Vuex](https://vuex.vuejs.org) por su parte es la encargada de administrar los datos, tomando como base el patron _state management_.


### pad-server

El código del **back-end** del sistema principal se encuentra en este respositorio. Parte del proyecto _open source_ [ rest](https://github.com/diegohaz/rest), el cual tiene pre configurado algunas características tales como: 

* Manejo de sesiones.
* Validación de peticiones.
* Paginación.
* API de reseto de password.
* API de login usando redes sociales.

Como base toma [expressjs](http://expressjs.com), la cual es una libreria para aplicaciones web, y tiene como _core_ a `Nodejs`. Toda la información se consolida en [mongoDB Atlas](https://www.mongodb.com/cloud/atlas), es decir hacemos uso del servicio en la nube para base de datos de `mongoDB` ([DBaaS](https://www.stratoscale.com/blog/dbaas/what-is-database-as-a-service/)). 

Para poder interacuar con la base de datos, requerimos de la libreria [mongoose](https://mongoosejs.com), con la cual extendemos las funcionalidades básicas del driver por defecto de `mongoDB`. Las sesiones son administradas usando el estandar JSON Web Token ([JWT](https://jwt.io/introduction/)), que permite el flujo de la información entre aplicaciones de forma segura.

**Ver también**

* [Listado completo de plugins](/beggining/getting-started.html)
