var gulp = require('gulp'),
	react = require('gulp-react');

var conf = {
	jsxSrc: 'src/components/jsx/*.jsx',
	jsxDest: 'src/components/js'
}

gulp.task('default', function() {
  // place code for your default task here

});

gulp.task('compile-jsx', function(cb) {
	return gulp.src(conf.jsxSrc)
		.pipe(react({es6module: true}))
		.pipe(gulp.dest(conf.jsxDest));
})

gulp.task('watch', function() {
	gulp.watch(conf.jsxSrc, ['compile-jsx']);
});