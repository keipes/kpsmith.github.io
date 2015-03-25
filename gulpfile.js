var gulp = require('gulp'),
	gutil = require('gulp-util'),
	react = require('gulp-react'),
    combiner = require('stream-combiner2');

var conf = {
	jsxSrc: 'src/components/jsx/*.jsx',
	jsxDest: 'src/components/js'
}

gulp.task('default', function() {
  // place code for your default task here

});

function onError(e) {
	gutil.log(gutil.colors.green(e.message));
	// console.log(e);
	this.emit('end');
}

gulp.task('compile-jsx', function(cb) {
	// start stream-combiner to watch and report errors
	var combined = combiner.obj([
		gulp.src(conf.jsxSrc)
			.pipe(react({es6module: true}))
			.on('error', onError)
			.pipe(gulp.dest(conf.jsxDest))
	]);
	combined.on('error', console.error.bind(console));
	return combined;
});

gulp.task('watch', ['compile-jsx'], function() {

	gulp.watch(conf.jsxSrc, ['compile-jsx']);
});