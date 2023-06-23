const gulp = require('gulp')
const postcss = require('gulp-postcss')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const path = require('path')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')
const browserSync = require("browser-sync").create()
const concat = require('gulp-concat')
const terser = require('gulp-terser')

function style() {
    const processors = [
        tailwindcss,
        autoprefixer,
        cssnano
    ];

    return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./app/assets/css'))
}

function imgSquash() {
    return gulp.src("./images/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./app/assets/images"));
}

function scripts() {
    const scriptsList = [
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/slick-carousel/slick/slick.min.js',
        // './node_modules/aos/dist/aos.js',
        './scripts/main.js',
    ];

    return gulp.src(scriptsList)
        .pipe(concat('app.js'))
        .pipe(terser())
        .pipe(gulp.dest('./app/assets/js'));
}

function watchTask() {
    browserSync.init({
        proxy: encodeURI(`localhost/landing_pages/${path.resolve(__dirname, './').split(path.sep).pop()}/app`),
        injectChanges: true,
    });
    gulp.watch(["./scss/**/*.scss", "./app/**/*.php"], style);
    gulp.watch('./scripts/**/*.js', scripts);
    gulp.watch("./images/**/*", imgSquash);
    gulp.watch(["./app/assets/css/**/*.css", "./app/**/*.php", "./app/assets/js/**/*.js"]).on('change', browserSync.reload);;
}

exports.watch = watchTask;