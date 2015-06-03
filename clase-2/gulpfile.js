var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
	changed = require('gulp-changed'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	imagemin    = require('gulp-imagemin'),
	del = require('del'),
	package = require('./package.json'); 
	

var cfg = {
	src: './src',
	dev: './dev'
}


/***********************************************************/

gulp.task('clean:dev', function(cb){
	del(cfg.dev+'/*', cb);
});

gulp.task('html', function () {
	gulp.src(cfg.src+'/**/*.html')
	.pipe(changed(cfg.dev))
	.pipe(gulp.dest(cfg.dev));
});


gulp.task('css', function () {

	gulp.src(cfg.src+'/scss/styles.css')
	.pipe(autoprefixer('last 4 version'))
	.pipe(gulp.dest(cfg.dev+'/css'))
	.pipe(minifyCSS({processImport: false}))
	.pipe(rename({ suffix: '.min' }))
	.pipe(gulp.dest(cfg.dev+'/css'));
});

gulp.task('js', function(){
  return gulp.src(cfg.src+'/js/scripts.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest(cfg.dev+'/js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(cfg.dev+'/js'));
});


gulp.task('fonts', function () {
    return gulp.src(cfg.src+'/fonts/*')
	.pipe(changed(cfg.dev+'/fonts'))
    .pipe(gulp.dest(cfg.dev+'/fonts'));
});


gulp.task('images_optimize', function(tmp) {
    return gulp.src([
		cfg.src+'/images/*.jpg',
		cfg.src+'/images/*.png'
	])
    .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
	.pipe(gulp.dest(cfg.dev+'/images'));
});


gulp.task('images', ['images_optimize'], function() {
    gulp.src(cfg.src+'/images/**/*')
    .pipe(gulp.dest(cfg.dev+'/images'));
});



gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: cfg.dev,
        }
    });
});


gulp.task('bs-reload', function () {
    browserSync.reload();
});


/******************************************
	TASKS
*******************************************/

// DEV
gulp.task('default', ['html', 'css', 'js', 'fonts', 'images', 'browser-sync'], function(){
		
		gulp.watch(cfg.src+'/**/*.html', ['html']);
		gulp.watch(cfg.src+'/css/**/*', ['css']);
		gulp.watch(cfg.src+'/js/**/*', ['js']);
		gulp.watch(cfg.src+'/images/**/*', ['images']);
		
		gulp.watch([
			cfg.dev + '/**/.html',
			cfg.dev + '/css/**/*',
			cfg.dev + '/js/**/*',
			cfg.dev + '/images/**/*'
		], ['bs-reload']);

});
