var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var karma = require('karma').server;

gulp.task('sass', function() {
    gulp.src([
        'public/**/*.scss',
        'src/modules/**/*.scss',
        'node_modules/angular-material/angular-material.scss'
    ])
        .pipe(concat('style.js'))
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('build'));
});

gulp.task('compress-dev', function() {
    gulp.src([
        'node_modules/angular/angular.js',
        'node_modules/angular-ui-router/release/angular-ui-router.js',
        'node_modules/angular-animate/angular-animate.js',
        'node_modules/angular-aria/angular-aria.js',
        'node_modules/angular-material/angular-material.js',
        'public/lib/*.js',
        'app.js',
        'src/**/*.js',
    ])
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
    gulp.watch('public/styles/*.scss', ['sass']);
    gulp.watch('src/modules/**/*.scss', ['sass']);
    gulp.watch('src/**/*.js', ['compress-dev']);
    gulp.watch('app.js', ['compress-dev']);
});

gulp.task('unit', function (done) {
    karma.start({
        configFile: __dirname + '/tests/karma.conf.js',
        singleRun: true
    }, done);
});

gulp.task('dev',  ['sass', 'compress-dev' , 'watch']);
