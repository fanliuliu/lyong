const gulp = require("gulp");
const sass = require("gulp-sass");


function htmlFn(){
    return gulp.src(['src/*.html'])
               .pipe(gulp.dest("server"))
}
exports.html = htmlFn;


function cssFn(){
    return gulp.src(['src/sass/**'])
               .pipe(sass())
               .pipe(gulp.dest("server/css"))
}
exports.css = cssFn;

function jsFn(){
    return gulp.src(['src/js/**'])
               .pipe(gulp.dest("server/js"))
}
exports.js = jsFn;

function jsonFn(){
    return gulp.src(['src/json/**'])
               .pipe(gulp.dest("server/json"))
}
exports.json = jsonFn;

function imgFn(){
    return gulp.src(['src/img/**'])
               .pipe(gulp.dest("server/img"))
}
exports.img = imgFn;

function apiFn(){
    return gulp.src(["src/api/**"])
               .pipe(gulp.dest("server/api"))
}
exports.api = apiFn;

function watchFn(){
    gulp.watch(['src/*.html'],htmlFn);
    gulp.watch(['src/sass/**'],cssFn);
    gulp.watch(['src/js/**'],jsFn);
    gulp.watch(['src/json/**'],jsonFn);
    gulp.watch(['src/img/**'],imgFn);
    gulp.watch(["src/api/**"],apiFn)
}

exports.watch = watchFn;