
#Curso Web-Project-Boilerplate

Boilerplate for web projects with gulp, sass, and bootstrap.Boilerplate for web projects.

##Tecnologías
- Sass
- Bootstrap-Sass-official
- Font-Awesome
- JQuery 1.11.13
- HTML5 tags on IE8.
- MediaQueries in IE8.

---

**Indice**

- [Contenido del curso](#contenido-del-curso)
	- [Sección 1: Introducción](#sección-1-introducción)
	- [Sección 2: Automatización básica](#sección-2-automatización-básica)
	- [Sección 3: Automatización de estilos con SASS](#sección-3-automatización-de-estilos-con-sass)
	- [Sección 4: Administración de paquetes con Bower](#sección-4-administración-de-paquetes-con-bower)
	- [Sección 5: Mixins de SASS](#sección-5-mixins-de-sass)
	- [Sección 6: Guía de estilos automática](#sección-6-guía-de-estilos-automática)
	- [Sección 7: Otras mejoras](#sección-7-otras-mejoras)
- [Estructura de carpetas](#estructura-de-carpetas)
- [Requerimientos](#requerimientos)
- [Tareas de Gulp](#tareas-de-gulp)
	- [Task: "dev"](#task-dev)
	- [Task: "comps"](#task-comps)
	- [Task: "build"](#task-build)
- [Acerca de](#acerca-de)

---



##Contenido del curso

###Sección 1: Introducción
- Metodología de trabajo
- Readme.md
- Estructura básica de carpetas(src, dist, y docs).
- Organización del source (images, css, js).

###Sección 2: Automatización básica
- Configuración inicial (package.json). 
- Node  package manager
- Introducción básica a administrador de tareas Gulp.
- Gulp. Servidor web en dist folder.
js).

###Sección 3: Automatización de estilos con SASS
- Modularización de estilos: _base, _fonts, _globals, _layout, y styles.
- Diseño atómico de componentes.
-  Organización de componentes.
- Introducción a SASS.
- Gulp: Compilación de estilos SASS.
- SASS: @imports, y @variables.

###Sección 4: Administración de paquetes con Bower
- Instalación de Bower.
- Configuración.
- Bower. Instalación de recursos: jQuery, Bootstrap, FontAwesome, Slick - Slider.
- Gulp. Unificación de recursos (estilos, scripts, y fonts).

###Sección 5: Mixins de SASS
- Diseño semántico de grillas.
- SASS. Introducción a mixins.
- Bower. Instalación de Bootstrap-SASS.
- SASS. Integración de Boostrap-SASS  mixins de grilla con estilos del sitio.

###Sección 6: Guía de estilos automática
- Introducción a Styledocco.
- Gulp. Configuración de styledocco.
- Gulp. Servidor de documentación.
- Introducción a Markdown.
- Documentación rápida de componentes con Markdown.

###Sección 7: Otras mejoras
- Optimización de imágenes.
- Excluir archivos sin modificar en las tareas de Gulp.
- Generación de archivos .map para debugear los estilos sass.
- Live edit de archivos sass con Google Chrome Workbench.

---

##Estructura de carpetas
	+---components
	+---dev
	+---dist
	+---src
		+---fonts
		+---images
		+---js
		+---scss
		¦   +---components
		+---vendors

- **\src**: Where all project files are developed.
- **\components**: Where all  individual HTML components are developed.
- **\dev**: Where the compiled project and live develop web server runs.
- **\dist**: Where the static compiled project reside, after a build.
	
		
##Requerimientos
- [Git] / [Git for Mac]
- [Node.js] / [Node.js for Mac])
- [Ruby] / [Ruby for Mac] with RVM
- [Gulp]
- [Bower]
- Any Git GUI like [SmartGit] / [SmartGit for Mac].

**Note**: In some networks Node.js or bower fail to access the packages because the _git://_ protocole is blocked. A workaround is to configure **Git** to globally use the protocol _https://_ instead.

Jus open the git console and run this command:
```
$ git config --global url."https://".insteadOf git://
```

##Tareas de Gulp

### Task: "dev"
_For development (default)_

```
$ gulp
```
This task compile all files from **\src** folder fo **\dev** folder, and start the web server for development.

### Task: "comps"
_For components_

```
$ gulp comps
```
This task compile all files from **\src** folder fo **\dev** folder, then copy the **\js**, **\css**, **\images**, and **\fonts** folder to the **\components** folder, and start the web server for component development.

### Task: "build"
_For distribution_

```
$ gulp build
```
This task compile all files from **\src** folder fo **\dist** folder.

---

##Acerca de

Curso creado y dictado por [Lucas Dasso].
- Web: <http://www.c238.com.ar>
- Email: <dassolucas@c238.com.ar>
- LinkedIn: <http://ar.linkedin.com/in/lucasdasso>

---
Última actualización: 2015-06-02




[Git]: http://git-scm.com/download/win
[Git for Mac]: http://git-scm.com/download/mac
[Node.js]: http://nodejs.org/dist/v0.12.4/node-v0.12.4-x86.msi
[Node.js for Mac]: http://nodejs.org/dist/v0.12.4/node-v0.12.4.pkg
[Ruby]: http://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-2.2.2.exe
[Ruby for Mac]: http://code.tutsplus.com/tutorials/how-to-install-ruby-on-a-mac--net-21664
[Gulp]: https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
[Bower]: http://bower.io/#install-bower
[SmartGit]: http://www.syntevo.com/smartgit/download?file=smartgit/smartgit-win32-setup-jre-6_5_8.zip
[SmartGit for Mac]: http://www.syntevo.com/smartgit/download?file=smartgit/smartgit-macosx-6_5_8.dmg

[Lucas Dasso]: http://www.c238.com.ar
