const { series } = require('gulp');
const { src, dest } = require('gulp');
const gulp = require('gulp');

const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

// for angularjs scripts
const ngAnnotate = require('gulp-ng-annotate');

// for unit test
const Server = require('karma').Server;

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
  .pipe(gulp.dest('./'))
}

// minify JS files
function uglifyTask() {
  return src(['js/studioapp.js', 'js/gmapload.js', 'js/reelviewer.js', 'js/scrollspy.js'])
  .pipe(uglify())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(gulp.dest('dist/js/'))
}

exports.unitTest = unitTestTask;
exports.buildjs = series(concatNgTask, uglifyTask);
