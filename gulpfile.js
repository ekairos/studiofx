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
const cleancss = require('gulp-clean-css');
// html min
const htmlmin = require('gulp-htmlmin');
const useref = require('gulp-useref');

// run unit tests from karma.conf.js
function unitTestTask(done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
  }, done).start();
}
// start building
function userefTask() {
  return gulp.src(['./*.html', './templates/**/*.html'], { base: "."})
    .pipe(useref())
    .pipe(gulp.dest('./dist/'));
}
// minify html
function htmlminTask() {
  return src('./dist/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist/'));
}
// annotate and concat angularjs files
function concatNgTask() {
  return src(['js/app.js', 'js/controller*.js', 'js/directive*.js'])
    .pipe(sourcemaps.init())
    .pipe(ngAnnotate({ single_quotes: true }))
    .pipe(uglify())
    .pipe(concat('studioapp.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'));
}
// minify JS files
function uglifyTask() {
  return src(['js/gmapload.js', 'js/reelviewer.js', 'js/scrollspy.js'])
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js/'));
}
// css minify series
function cleancssTask() {
  return src(['./css/resetCSS.css', './css/studioanimation.css', './css/studiostyle.css'])
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(cleancss())
    .pipe(concat('studiostyles.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'));
}
// nodes_modules
function modulesTask() {
  return src(['node_modules/angular/**/*.min.js', 'node_modules/angular-route/**/*.min.js', 'node_modules/angular-animate/**/*.min.js', 'node_modules/bootstrap/dist/**/*', 'node_modules/jquery/dist/**/*'], { base: '.' })
  .pipe(gulp.dest('./dist/'));
}
//assets
function assetsTask() {
  return src(['./assets/**/*'], { base: '.' })
    .pipe(gulp.dest('./dist/'))
}

exports.unitTest = unitTestTask;
exports.useref = userefTask;
exports.buildjs = series(concatNgTask, uglifyTask);
exports.cssmin = cleancssTask;
exports.modules = modulesTask;
exports.assets = assetsTask;
// building the app
exports.build = series(userefTask, concatNgTask, uglifyTask, cleancssTask, htmlminTask);
exports.assets = series(assetsTask, modulesTask);
