//------------------------------------//
//    Plugins
//------------------------------------//
var gulp            = require('gulp'),
    autoprefixer    = require('gulp-autoprefixer'),
    gulpif          = require('gulp-if'),
    minimist        = require('minimist'),
    sass            = require('gulp-sass'),
    sourcemaps      = require('gulp-sourcemaps');

const browserSync = require('browser-sync').create();
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');


// ------------------------------------//
//    Variables
// ------------------------------------//
// Localhost URL for BrowserSync
// Use the --proxy flag to change without editing this file
const localhost = 'hackerrank.localhost';

// Paths
const paths = {
  theme: './',
  sass: './css/scss/',
  css: './css/',
  js: './js/',
};

// Autoprefixer browser support
const support = ['last 2 versions', 'ie >= 9', 'android >= 4.4', 'ios >= 7'];

// Flags
const knownFlags = {
  boolean: ['dev', 'bs'],
  string: ['proxy'],
  default: {
    dev: true,
    bs: false,
    proxy: localhost,
  },
};
const flags = minimist(process.argv.slice(2), knownFlags);


// ------------------------------------//
//    Tasks
// ------------------------------------//
gulp.task('deploy', deployTask);
gulp.task('watch', watchTask);
gulp.task('sass', sassTask);
gulp.task('default', ['sass', 'deploy', 'watch'], defaultTask);


// Supporting Functions
function defaultTask() {
  console.log('***NOTE*** Default Task pretasks complete. Be sure to check for errors.');
  if (flags.bs) {
      return browserSync.init({
          proxy: flags.proxy,
          online: true,
      });
  }
}

// Sass
function sassTask() {
  gulp.src(`${paths.sass}/layout.scss`)
    .pipe(gulpif(flags.dev, sourcemaps.init()))
    .pipe(sass({
      outputStyle: 'compressed',
    })
    .on('error', sass.logError))
    .pipe(autoprefixer({ browsers: support }))
    .pipe(gulpif(flags.dev, sourcemaps.write('./')))
    .pipe(gulp.dest(paths.css))
    .pipe(gulpif(flags.bs, browserSync.stream()));
}
sassTask.description = `Lint scss, compile sass, run autoprefixer, and save to ${paths.sass}`;
sassTask.flags = {
  default: 'Output style is compressed.',
  '--dev': 'Output style is expanded and uses sourcemaps.',
};


// Watch
function watchTask() {
  gulp.watch(`${paths.theme}**/*.scss`, ['sass'])
    .on('change', (event) => {
      console.log(`File ${event.path} was ${event.type}, running sass task...`);
    });
}
watchTask.description = 'Watches files for changes';


// Webpack
function deployTask() {
  return webpack(webpackConfig, function(err, stats) {
    if (err) console.error(err);
    else console.log(stats.toString({ colors: true }));
  });
}
deployTask.description = 'Bundles all JS/HTML assets into entry point min.js bundles.';