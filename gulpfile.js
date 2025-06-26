const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const connect = require('gulp-connect');
const { exec } = require('child_process');


// Compilar SCSS por página
gulp.task("styles", () => {
  return gulp
    .src("src/views/**/[^_]*.scss") // ignora parciais (_arquivo.scss)
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/views"))
    .pipe(connect.reload());
});

// Copiar HTMLs mantendo estrutura
gulp.task("html", () => {
  return gulp
    .src("src/views/**/*.html")
    .pipe(gulp.dest("dist/views"))
    .pipe(connect.reload());
});

// Copiar Js mantendo estrutura
gulp.task("js", () => {
  return gulp
    .src("src/views/**/*.js")
    .pipe(gulp.dest("dist/views"))
    .pipe(connect.reload());
});

// Rodar Rollup (para JS principal)
gulp.task("scripts", cb => {
  exec("npx rollup -c", (err, stdout, stderr) => {
    console.log(stdout);
    console.error(stderr);
    cb(err);
  });
});

// Servidor local
gulp.task("serve", () => {
    connect.server({
    root: "dist",
    livereload: true,
    port: 3000,
    fallback: "dist/index.html",
  });
});

// Watch
gulp.task("watch", () => {
  gulp.watch("src/views/**/*.scss", gulp.series("styles"));
  gulp.watch("src/views/**/*.html", gulp.series("html"));
  gulp.watch("src/**/*.js", gulp.series("js"));
});

// Tarefa principal
gulp.task("default", gulp.parallel("styles", "html", "scripts", "serve", "watch", "js"));
