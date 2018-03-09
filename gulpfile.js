
var gulp = require('gulp');
var extname = require('gulp-extname');

var postcss = require('gulp-postcss');
var simpleVars = require('postcss-simple-vars');
var colorFunction = require("postcss-color-function");
var customMedia = require("postcss-custom-media");
var conditionals = require("postcss-conditionals");


gulp.task('postcss', function () {
  var processors = [
    simpleVars(),
    colorFunction(),
    customMedia(),
    conditionals()
  ];
  return gulp.src('./static/**/*.postcss')
	.pipe(extname('.css'))
    .pipe(postcss(processors))
	.pipe(gulp.dest('./static'));
});


    // .pipe(postcss(processors).on('error', gutil.log))


// Watch asset folder for changes
gulp.task("watch", ["postcss"], function () {
    gulp.watch("static/**/*.postcss", ["postcss"])
})


