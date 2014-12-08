/**
 * Created by Chris on 12/7/2014.
 */
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// watch files for changes and reload
gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: 'app'
        }
    });

    gulp.watch(['partials/**/*.html', 'styles/**/*.css', 'js/**/*.js', 'index.html'], {cwd: 'app'}, reload);
});

