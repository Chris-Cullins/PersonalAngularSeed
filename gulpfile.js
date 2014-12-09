/**
 * Created by Chris on 12/7/2014.
 */
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var inject = require("gulp-inject");

// watch files for changes and reload
gulp.task('serve', function() {

    var target = gulp.src('./app/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./app/js/**/*.js', './app/css/*.css'], {read: false});

    browserSync({
        server: {
            baseDir: 'app'
        }
    });

    gulp.watch(['views/**/*.html', 'css/**/*.css', 'js/controllers/*.js', 'js/directives/*.js',
        'js/filters/*.js',
        'js/services/*.js','index.html'], {cwd: 'app'}, reload);

    return target.pipe(inject(sources, {relative: true}))
        .pipe(gulp.dest('./app'));
});

