const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('default', ()=>{
gulp.src('src/scss/style.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers:['last 4 versions']
        }))
        .pipe(gulp.dest('output/css'))
})


