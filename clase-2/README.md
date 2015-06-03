#Curso Web-Project-Boilerplate


###Sección 2: Automatización básica
- Configuración inicial (package.json). 
- Node  package manager
- Introducción básica a administrador de tareas Gulp.
- Gulp. Servidor web en dist folder.


---
####Me interea tu opinión:

Completa la **Encuesta de satisfacción**: <http://goo.gl/forms/VIOTJRm6NR>

---

##Estructura de carpetas
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
Esta tarea compilar todos los archivos de la carpeta ** \ src ** a la carpeta ** \ dev **, e iniciar el servidor web.

