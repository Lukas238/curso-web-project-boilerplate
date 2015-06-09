/******************************
	SETUP
******************************/

//PLUGINS
var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	gutil = require('gulp-util'),
	run = require('run-sequence'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	autoprefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename'),
	minifyCSS = require('gulp-minify-css'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	imagemin    = require('gulp-imagemin'),
	del = require('del'),
	fs = require('fs'),
	path = require('path'),
	glob = require('glob'),
	package = require('./package.json'); 
	

//VARIABLES GLOBALES
var cfg = {
	src: './src',
	dev: './dev',
	comp: './components',
	wf: 'dev', /* Defautl Working Folder */
	directory: false	/* BrowserSync */
}

//ERROR HANDLING
var gulp_src = gulp.src;
gulp.src = function() {
	return gulp_src.apply(gulp, arguments)
	.pipe(plumber(function(error) {
			gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.reason));
			gutil.log(gutil.colors.yellow('Line '+ error.line+', Column ' + error.column + ' | ' + error.file));
			gutil.log(gutil.colors.grey('Path: ' + error.fileName));
			this.emit('end');
		})
	);
};


/******************************
	TASKS 
******************************/

//CLEAN: DEV
gulp.task('clean:dev', function(cb){
	del(cfg.dev+'/*', cb);
});


//CLEAN: COMPONENTS
gulp.task('clean:comps', function(cb){
	del([
		cfg.comp+'/*',
		'!'+cfg.comp+'/*.html'
	], cb);
});




//HTML
gulp.task('html', function () {
	return gulp.src(cfg.src+'/**/*.html')
	.pipe(gulp.dest(cfg.wf))
	.pipe(browserSync.reload({stream:true}));
});

// Import the whole directory with @import "somedir/all";
gulp.task('sass-includes', function (callback) {
	var all = '_all.scss';
	glob(cfg.src+'/scss/**/' + all, function (error, files) {
		files.forEach(function (allFile) {
			// Add a banner to warn users
			fs.writeFileSync(allFile, '/** This is a dynamically generated file **/\n\n');
			var directory = path.dirname(allFile);
			var partials = fs.readdirSync(directory).filter(function (file) {
				return (
					// Exclude the dynamically generated file
					file !== all &&
					// Only include _*.scss files
					path.basename(file).substring(0, 1) === '_' &&
					path.extname(file) === '.scss'
				);
			});

			// Append import statements for each partial
			partials.forEach(function (partial) {
				fs.appendFileSync(allFile, '@import "' + partial + '";\n');
			});
		});
	});
	callback();
});


gulp.task('css', ['sass-includes'], function () {
	return gulp.src(cfg.src+'/scss/styles.scss')
	.pipe(sass({ errLogToConsole: true }))
	.pipe(autoprefixer('last 4 version'))
	.pipe(gulp.dest(cfg.wf+'/css'))
	.pipe(rename({ suffix: '.min' }))
	.pipe(minifyCSS({processImport: false}))
	.pipe(gulp.dest(cfg.wf+'/css'))
	.pipe(browserSync.reload({stream:true}));	
});

//SCRIPTS
gulp.task('vendors:js', function(){
	return gulp.src([
		cfg.src+'/js/*.js',
		'!'+cfg.src+'/js/scripts.js'
		])
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(cfg.wf+'/js'))
	.pipe(browserSync.reload({stream:true}));
});


gulp.task('js', ['vendors:js'], function(){
	return gulp.src(cfg.src+'/js/scripts.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest(cfg.wf+'/js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(cfg.wf+'/js'))
	.pipe(browserSync.reload({stream:true}));
});




//FONTS
gulp.task('fonts', function () {
    return gulp.src(cfg.src+'/fonts/*')
    .pipe(gulp.dest(cfg.wf+'/fonts'))
	.pipe(browserSync.reload({stream:true}));
});


//IMAGES: OPTIMIZE
gulp.task('images_optimize', function(tmp) {
    return gulp.src([
		cfg.src+'/images/*.jpg',
		cfg.src+'/images/*.png'
	])
    .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
	.pipe(gulp.dest(cfg.wf+'/images'));
});

//IMAGES
gulp.task('images', ['images_optimize'], function() {
    return gulp.src(cfg.src+'/images/**/*')
    .pipe(gulp.dest(cfg.wf+'/images'))
	.pipe(browserSync.reload({stream:true}));
});




//SERVER: DEV
gulp.task('browser-sync', function() {
    browserSync.init(null,{
        server: {
            baseDir: cfg.wf,
			directory: cfg.directory
        }
    });
});

//SERVER: DEV
gulp.task('browser-sync', function() {
    browserSync.init(null,{
        server: {
            baseDir: cfg.wf,
			directory: cfg.directory
        }
    });
});


/******************************
	USER TASKS 
******************************/

//TASK: DEV
gulp.task('default', ['clean:dev'], function(){
	
	//Settings
	cfg.wf = cfg.dev;
	cfg.directory = false;
	
	//Watchers
	run(['html', 'css', 'js', 'fonts', 'images', 'browser-sync'], function(){
		
		gulp.watch(cfg.src+'/**/*.html', ['html']);
		gulp.watch(cfg.src+'/scss/**/*.scss', ['css']);
		gulp.watch(cfg.src+'/js/**/*.js', ['js']);
		gulp.watch(cfg.src+'/images/**/*', ['images']);
		
	});

});

//TASK: COMPONENTS
gulp.task('comps', ['clean:comps'], function () {
	
	//Settings
	cfg.wf = cfg.comp;
	cfg.directory = true;
	
	//Watchers
	run(['css', 'js', 'fonts', 'images', 'browser-sync'], function () {
		
		gulp.watch(cfg.wf+'/**/*.html', ['html']);
		gulp.watch(cfg.src+'/scss/**/*.scss', ['css']);
		gulp.watch(cfg.src+'/js/**/*.js', ['js']);
		gulp.watch(cfg.src+'/images/**/*', ['images']);
		
	});	
});

