#Curso Web-Project-Boilerplate


###Sección 2: Automatización básica
- Configuración inicial https://www.youtube.com/watch?v=YjuNpLkLe0U). 
- Node package manager.
- Introducción básica a administrador de tareas Gulp.
- Gulp. Servidor web en dist folder.


####Lecturas sugeridas:
- [Improving Code Readability With CSS Styleguides](http://www.smashingmagazine.com/2008/05/02/improving-code-readability-with-css-styleguides/)
- [package.json: An interactive guide](http://browsenpm.org/package.json)
- [Building With Gulp](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/)
- [browsersync.io](http://www.browsersync.io/)


####Me interea tu opinión:

Completa la **Encuesta de satisfacción**: <http://goo.gl/forms/VIOTJRm6NR>

---

##Temas vistos en clase

###Configuración inicial (package.json).

1. Primero que nada debemos crear una carpeta para nuestro proyecto. Por ejemplo en **C:\Work\curos2**.
2. Luego debemos abrir una vendana de comandos en esa carpeta ([ver video](https://www.youtube.com/watch?v=YjuNpLkLe0U)).
3. Ahora podemos crear el archivo **package.json** usando el comando:
```
$ npm init
```
4. Esto iniciara un proceso de preguntas donde podemos completar la información del proyecto, como _Autor_, _Titulo del proyecto_, _versión_, etc. (o tambien podemos dejar todos los valores por default solo precionando _enter_ a cada pregunta).
5. Ya tenemos creado un **package.json** básico con el cual trabajar.

###**N**ode **P**ackage **M**anager (npm)

1. Ahora podremos  ir instalando los diferentes plugins que nuestro proyecto necesita.  

Por ejemplo si quisieramos instalar el plugin **gulp-minify-css**, solo debemos ingresar el comando:
```
$ npm install --savedev gulp-minify-css
```
El parámetro _--savedev_ le dice a Node que -ademas de instalar el plugin- lo anote en nuestro archivo **package.json** como una dependencia del proyecto.

####Instalación automática de plugins
Cuando bajamos un proyecto ya existente, con su **package.json** completo con los plugins reuqeridos, solo vamos a necesitamos instalar dichos plugins de forma autmatica.

Para eso baste el siguiente comando:
```
$ npm install
```
Al no especificar el nombre del plugins que queremos instalar, Node usara la lista de dependencias dentro del **package.json** del proyecto.

---

##Boilerplate

###Estructura de carpetas
	+---dev
	+---src
		+---fonts
		+---images
		+---js
		+---css
		    +---components

- **\src**: Aquí estan todos los archivos editables
- **\dev**: Aquí se compilan los archivos de **\src**, y se prende el servidor web.

---

###Gulp Tasks

#### Task: "dev" | Development (default)

```
$	gulp
```
Esta tarea compilar todos los archivos de la carpeta ** \ src ** a la carpeta ** \ dev **, e iniciar el servidor web.

