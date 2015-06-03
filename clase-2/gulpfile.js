/******************************
	SETUP
******************************/

//PLUGINS
var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	gutil = require('gulp-util'),
	changed = require('gulp-changed'),
	browserSync = require('browser-sync').create(),
	autoprefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename'),
	minifyCSS = require('gulp-minify-css'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	imagemin    = require('gulp-imagemin'),
	del = require('del'),
	package = require('./package.json'); 
	

//VARIABLES GLOBALES
var cfg = {
	src: './src',
	dev: './dev'
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

//HTML
gulp.task('html', function () {
	return gulp.src(cfg.src+'/**/*.html')
	.pipe(gulp.dest(cfg.dev))
	.pipe(browserSync.reload({stream:true}));
});

//CSS
gulp.task('css', function () {
	return gulp.src(cfg.src+'/css/**/*.css')
	.pipe(changed(cfg.dev+'/css'))
	.pipe(autoprefixer('last 4 version'))
	.pipe(gulp.dest(cfg.dev+'/css'))
	.pipe(minifyCSS({processImport: false}))
	.pipe(rename({ suffix: '.min' }))
	.pipe(gulp.dest(cfg.dev+'/css'))
	.pipe(browserSync.reload({stream:true}));
});

//SCRIPTS
gulp.task('js', function(){
	return gulp.src(cfg.src+'/js/scripts.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest(cfg.dev+'/js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(cfg.dev+'/js'))
	.pipe(browserSync.reload({stream:true}));
});

//FONTS
gulp.task('fonts', function () {
    return gulp.src(cfg.src+'/fonts/*')
    .pipe(gulp.dest(cfg.dev+'/fonts'))
	.pipe(browserSync.reload({stream:true}));
});


//IMAGES: OPTIMIZE
gulp.task('images_optimize', function(tmp) {
    return gulp.src([
		cfg.src+'/images/*.jpg',
		cfg.src+'/images/*.png'
	])
    .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
	.pipe(gulp.dest(cfg.dev+'/images'));
});

//IMAGES
gulp.task('images', ['images_optimize'], function() {
    return gulp.src(cfg.src+'/images/**/*')
    .pipe(gulp.dest(cfg.dev+'/images'))
	.pipe(browserSync.reload({stream:true}));
});



//SERVER: DEV
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: cfg.dev
        }
    });
});


/******************************
	USER TASKS 
******************************/

// DEV
gulp.task('default', ['html', 'css', 'js', 'fonts', 'images', 'browser-sync'], function(){
	gulp.watch(cfg.src+'/**/*.html', ['html']);
	gulp.watch(cfg.src+'/css/*.css', ['css']);
	gulp.watch(cfg.src+'/js/**/*.js', ['js']);
	gulp.watch(cfg.src+'/images/**/*', ['images']);
});
