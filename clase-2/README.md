#Curso Web-Project-Boilerplate


###Sección 2: Automatización básica
- Configuración inicial (package.json). 
- Node  package manager
- Introducción básica a administrador de tareas Gulp.
- Gulp. Servidor web en dist folder.
js).

---

##Folder structure
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
	
		
##Requirements:
- [Git]
- [Node.js]
- [Ruby]
- [Gulp]
- [Bower]
- [SmartGit]. GUI para git.

**Note**: In some networks Node.js or bower fail to access the packages because the _git://_ protocole is blocked. A workaround is to configure **Git** to globally use the protocol _https://_ instead.

Jus open the git console and run this command:

	$ git config --global url."https://".insteadOf git://

###Support
- Sass
- Bootstrap-Sass-official
- Font-Awesome
- JQuery 1.11.13
- HTML5 tags on IE8.
- MediaQueries in IE8.


##Gulp Tasks

### Task: "dev" | Development (default)

```
$	gulp
```
This task compile all files from **\src** folder fo **\dev** folder, and start the web server for development.




[Git]: http://git-scm.com/download/win
[Node.js]: http://nodejs.org/dist/v0.12.4/node-v0.12.4-x86.msi
[Ruby]: http://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-2.2.2.exe
[Gulp]: https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
[Bower]: http://bower.io/#install-bower
[SmartGit]: http://www.syntevo.com/smartgit/download?file=smartgit/smartgit-win32-setup-jre-6_5_8.zip
