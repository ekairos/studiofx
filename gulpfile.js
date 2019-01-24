const { series } = require('gulp');
const { src, dest } = require('gulp');
const gulp = require('gulp');
// js files requireemnts
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
// for angularjs scripts
const ngAnnotate = require('gulp-ng-annotate');
// for unit test
const Server = require('karma').Server;
// css min requirements
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const cssmin = require('gulp-cssmin');

// run unit tests from karma.conf.js
function unitTestTask(done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
  }, done).start();
}

// annotate and concat angularjs files
function concatNgTask() {
  return src(['js/app.js', 'js/controller*.js', 'js/directive*.js'])
  .pipe(ngAnnotate({ single_quotes: true }))
  .pipe(rename({ extname: '.ant.js' }))
  .pipe(gulp.dest('js/gulp/annotated/'))
  .pipe(concat('js/studioapp.js'))
  .pipe(gulp.dest('./'));
}

// minify JS files
function uglifyTask() {
  return src(['js/studioapp.js', 'js/gmapload.js', 'js/reelviewer.js', 'js/scrollspy.js'])
  .pipe(uglify())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(gulp.dest('dist/js/'));
}

// css minify series
function cssMinifyTask() {
  return src(['./src/css/resetCSS.css', './src/css/studioanimation.css', './src/css/studiostyle.css'])
  .pipe(sourcemaps.init())
  .pipe(postcss([ autoprefixer() ]))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./src/css/prfx'))
  .pipe(cssmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./dist/css'));
}

exports.unitTest = unitTestTask;
exports.buildjs = series(concatNgTask, uglifyTask);
exports.cssmin = cssMinifyTask;
