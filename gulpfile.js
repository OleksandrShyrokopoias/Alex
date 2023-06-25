var gulp = require("gulp"),
    watch = require("gulp-watch"),
    autoprefixer = require("gulp-autoprefixer"),
    sass = require('gulp-sass')(require('sass')),
    cssmin = require("gulp-clean-css"),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    browsersync = require('browser-sync').create();


function css() {
    return gulp
      .src("scss/*.scss")
      .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css/'))
        .pipe(browsersync.stream())
  }
  
  function browserSync() {
	browsersync.init({
		server: { baseDir: '.' },
		notify: false,
		online: true,
	})
}

// Watch files
function watchFiles() {
    gulp.watch("scss/**/*", css);
    gulp.watch('*.html').on('change', browsersync.reload);
}

var watch = gulp.parallel(watchFiles,browserSync);

exports.watch = watch;
  