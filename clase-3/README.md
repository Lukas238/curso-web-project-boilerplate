#Curso Web-Project-Boilerplate
[Link al curso]



###Sección 3: Automatización de estilos con SASS
- Modularización de estilos: _base, _fonts, _globals, _layout, y styles.
- Diseño atómico de componentes.
- Organización de componentes.
- Introducción a SASS.
- Gulp: Compilación de estilos SASS.
- SASS: @imports, y @variables.


---

####Lecturas sugeridas:

#####Atomic design
- [Atomic Design]
- [What is atomic design]
- Book [_Atomic Design_], by Brad Frost
- [Challenging CSS Best Practices]
- [The “Other” Interface: Atomic Design With Sass]

#####SASS
- [Sass Basics]
- [SassMeister]
- [Sass Functions Cheat Sheet]
- [Bootstrap3 Sass grid mixins]
- [Sass & Compass Color Functions]
- [DRY-ing Out Your Sass Mixins]


####Me interea tu opinión:

Completa la **Encuesta de satisfacción**: <http://goo.gl/forms/FWkUWtErkU>

---

##Boilerplate

###Estructura de carpetas
	+---components
	+---dev
	+---src
		+---fonts
		+---images
		+---js
		+---scss
		    +---components

- **\src**: Aquí estan todos los archivos editables
- **\dev**: Aquí se compilan los archivos de **\src**, y se iniciara el servidor web con la tarea default de gulp.
- **\components**: Aquí es donde estan los archivos HTML de los componentes, y en donde se iniciara el ervidor web con la tarea **comps** de gulp.

---

###Gulp Tasks

####Tarea de desarollo: _dev_ (default)

```
$	gulp
```
Esta tarea compilar todos los archivos de la carpeta **\src** a la carpeta **\dev**, e iniciar el servidor web.

####Tarea de complementos: _comps_ 

```
$	gulp comps
```
Esta tarea compilar todos los archivos de la carpeta **\src** a la carpeta **\comps** menos los html de páginas, e iniciar el servidor web como directorio de carpeta.




[Link al curso]: https://github.com/Lukas238/curso-web-project-boilerplate

[Atomic Design]: http://bradfrost.com/blog/post/atomic-web-design/
[What is atomic design]: https://habaneroconsulting.com/insights/what-is-atomic-design#.VXhCX_l_Pp4
[_Atomic Design_]: http://atomicdesign.bradfrost.com/table-of-contents/
[Challenging CSS Best Practices]: http://www.smashingmagazine.com/2013/10/21/challenging-css-best-practices-atomic-approach/
[The “Other” Interface: Atomic Design With Sass]: http://www.smashingmagazine.com/2013/08/02/other-interface-atomic-design-sass/
[Sass Basics]: http://sass-lang.com/guide
[SassMeister]: http://sassmeister.com/
[Sass Functions Cheat Sheet]: http://www.cheatography.com/hamidyfine/cheat-sheets/sass-functions/
[Bootstrap3 Sass grid mixins]: http://www.cheatography.com/lukas238/cheat-sheets/bootstrap3-sass-mixins/
[Sass & Compass Color Functions]: http://jackiebalzer.com/color
[DRY-ing Out Your Sass Mixins]: http://alistapart.com/article/dry-ing-out-your-sass-mixins