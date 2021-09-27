const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', (callback) => {
    console.log('Construyendo el sitio');

    setTimeout(callback, 1200);
});

/** 
 * Esta tarea genera un error con versiones de Node.js mayores
 * a la 14.
 * 
 * Se uso la herramienta nvm para utilizar la versión 12. 
 * 
*/
gulp.task('serve', (callback) => {
    gulp.src('www')
        .pipe(server({
            livereload: true,
            open: true
        }));
});

/**
 * Tarea por default, ejecutar con el comando 'gulp'
 */
gulp.task('default', gulp.series('build', 'serve'));