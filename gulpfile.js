const gulp = require('gulp');
const livereload = require('gulp-livereload');

let html = [
    'public/*.html',
    'public/**/*.html'
];

let js = [
    'public/*.js',
    'public/**/*.js'
];

let css = [
    'public/styles.css'
];

gulp.task('watch', function(){
    livereload.listen({host: 'localhost', post: 3000});
    gulp.watch(html, ['html']);
    gulp.watch(js, ['js']);
    gulp.watch(css, ['css']);
});

gulp.task('html', function(){
    gulp.src(html)
        .pipe(livereload());
});

gulp.task('js', function(){
    gulp.src(js)
        .pipe(livereload());
});
gulp.task('css', function() {
    gulp.src(css)
        .pipe(livereload())
});