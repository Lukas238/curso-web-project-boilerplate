#Curso Web-Project-Boilerplate


###Sección 2: Automatización básica
- Configuración inicial (package.json). 
- Node  package manager
- Introducción básica a administrador de tareas Gulp.
- Gulp. Servidor web en dist folder.
js).

---

##estructura de carpetas
	+---dev
	+---src
		+---fonts
		+---images
		+---js
		+---css
		    +---components

- **\src**: Aquí estan todos los archivos editables
- **\dev**: Aquí se compilan los archivos de **\src**, y se prende el servidor web.


##Gulp Tasks

### Task: "dev" | Development (default)

```
$	gulp
```
This task compile all files from **\src** folder fo **\dev** folder, and start the web server for development.

