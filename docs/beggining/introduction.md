---
title: SAM 
---

# Requerimientos iniciales  

## Configuración de Git
El versionado del proyecto se lleva a cabo por medio del software `git`. Este software permite guardar una copia de cada modificación hecha en el sistema. Para poder hacer uso de `git` es necesario bajar el ejecutable e instalarlo de manera local en nuestro ordenador.

**Ver mas**
* [¿qué es git?](https://es.wikipedia.org/wiki/Git)

### Instalar Git
Primeramente hay que descargar e instalar el ejecutable de [git](https://git-scm.com/download/win).

Una vez instalado ejecutar el comando en el simbolo de sistema de windows:
```
git --version
```
En la pantalla debería de mostrarse algo parecido a: 
```
git version 2.15.0
``` 

### Clonar el proyecto
Para clonar el proyecto, y tener los archivos fuente en nuestra maquina, hay que usar ejecutar el comando `git clone <url_del_servidor_proyecto>`. Con esto el sistema descargará del repositorio la versión mas reciente del proyecto.

**NOTA**: 
`url_del_servidor_proyecto` es la ruta del repositorio donde se decidió guardar el proyecto. *Por ejemplo: https://github.com/liverpool/proyecto.git*

## Maven
Maven permite crear la estructura de directorios `“src”, “resources”, “lib”, etc.`, configurar los accesos a bases de datos y a otros repositorios; configurar un directorio para depositar los ficheros compilados `“.class”, “.jar”, etc`.

### Configuración de Maven
Para instalar Apache Maven en Windows, solo necesita descargar el archivo zip de [Maven](http://maven.apache.org), descomprimirlo en una carpeta y configurar las variables de entorno de Windows.

Maven necesita tener instalado un [JDK](https://www.oracle.com/technetwork/java/javase/downloads/index.html) correspondiente a la versión de Maven instalada. Una vez hecha la instalación. se debe de configurar la variable de entorno `JAVA_HOME`.

::: tip
* Maven 3.3+ requiere JDK 1.7+
* Maven 3.2 requiere JDK 1.6+
* Maven 3.0 / 3.1 requiere JDK 1.5+
:::

Para revisar si la instalación y configuración de `Maven` fue exitosa, debes de abrir el simbolo de sistema de windows y ejecutar el comando:
```
mvn -v
```
El resultado deberá ser algo como lo siguiente:

```
Apache Maven 3.5.2 
Maven home: /usr/local/Cellar/maven/3.5.2/libexec
Java version: 1.8.0_152, vendor: Oracle Corporation
Java home: /Library/Java/JavaVirtualMachines/jdk1.8.0_152.jdk/Contents/Home/jre
Default locale: es_MX, platform encoding: UTF-8
OS name: "mac os x", version: "10.15.2", arch: "x86_64", family: "mac"
```
### Archivo pom.xml
Dentro del fichero `pom.xml` (Proyect Object Model), se encuentra la configuración del proyecto. En este se  indican repositorios, dependencias (librerias java externas necesarias para ejecutar el proyecto); y los perfiles los cuales nos permitirán construir el WAR para cada entorno de desarrollo modificando únicamente un parametro en la línea de comandos.

### Perfilamiento en Maven
Los perfiles de maven se declaran dentro del tag `<profiles>` en el archivo `pom.xml`. Este proyecto tiene 4 entornos configurados:
* **desa**: genera el `WAR` que puede ser montado en un servidor local (Apache Tomee o Tomcat) en un entorno de desarrollo `Linux`.
* **desawin**: genera el `WAR` que puede ser montado en un servidor local (Apache Tomee o Tomcat) en un entorno de desarrollo `Windows`.
* **test**: genera el `WAR` que puede ser montado en el servidor `WAS` de QA de Liverpool. 
* **prod**: genera el `WAR` que puede ser montado en el servidor `WAS` de Producción de Liverpool. 

**NOTA**: Parametros tales como los *endpoint* de los servicios web y la ruta donde se almacenarán los logs, se configuran de manera automática.

# Procedimiento de instalación
### Generando WAR
Una vez que definamos para que entorno deseamos construir nuestro archivo WAR, basta con ejecutar el comando

```bash
mvn clean package -f "<ruta_local>/SAM/SAM Produccion/pom.xml" -P<profile>
```
Donde
* `<ruta_local>`: es la ruta completa donde se encuentra descargado el proyecto. Por ejemplo: *"C:/Users/SAM/SAM Produccion/pom.xml"*
* `<profile>`: es el perfil que queremos usar para la construción del WAR. Por ejemplo, si queremos construir nuestro paquete para producción sería : *mvn clean package -f "<ruta_local>/SAM/SAM Produccion/pom.xml" -Pprod*
