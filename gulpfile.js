const gulp = require('gulp');
const {
  series
} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const cssbeautify = require('gulp-cssbeautify');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
// const imagemin = require('gulp-imagemin');

function style() {
  return gulp.src('./main.scss')
    .pipe(sass())
    .pipe(cssbeautify())
    .pipe(gulp.dest('./'))
}

// function imgMini() {
//   return gulp.src('./images/images/**/*.*')
//     .pipe(imagemin([
//       imagemin.gifsicle({
//         interlaced: true
//       }),
//       imagemin.jpegtran({
//         progressive: true
//       }),
//       imagemin.optipng({
//         optimizationLevel: 5
//       }),
//       imagemin.svgo({
//         plugins: [{
//             removeViewBox: true
//           },
//           {
//             cleanupIDs: false
//           }
//         ]
//       })
//     ]))
//     .pipe(gulp.dest('./images/images/'))
// }


function copyHtml() {
  return gulp.src('./*.html')
    .pipe(gulp.dest('./ready-file/demo-file/demo/'))
    .pipe(gulp.dest('./ready-file/client-file/'))
}
function copyContactPhp() {
  return gulp.src('./*.php')
    .pipe(gulp.dest('./ready-file/demo-file/demo/'))
    .pipe(gulp.dest('./ready-file/client-file/'))
}
function copySass() {
  return gulp.src('./images/sass/**/*.*')
    .pipe(gulp.dest('./ready-file/client-file/assets/sass/'))
}

function copyfonts() {
  return gulp.src('./images/fonts/*.*')
    .pipe(gulp.dest('./ready-file/demo-file/demo/assets/fonts/'))
    .pipe(gulp.dest('./ready-file/client-file/assets/fonts/'))
}

function copywebfonts() {
  return gulp.src('./images/webfonts/*.*')
    .pipe(gulp.dest('./ready-file/demo-file/demo/assets/webfonts/'))
    .pipe(gulp.dest('./ready-file/client-file/assets/webfonts/'))
}

function copyImages() {
  return gulp.src('./images/images/**/*.*')
    .pipe(gulp.dest('./ready-file/demo-file/demo/assets/images/'))
    .pipe(gulp.dest('./ready-file/client-file/assets/images/'))
}

function copyJs() {
  return gulp.src('./images/js/**/*.*')
    .pipe(gulp.dest('./ready-file/demo-file/demo/assets/js/'))
    .pipe(gulp.dest('./ready-file/client-file/assets/js/'))
}

function miniJs() {
  return gulp.src('./images/js/**/*.*')
    // .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./ready-file/demo-file/demo/assets/js/'))
}

function copyCss() {
  return gulp.src('./images/*.js')
    .pipe(gulp.dest('./ready-file/demo-file/demo/assets/css/'))
    .pipe(gulp.dest('./ready-file/client-file/assets/css/'))
}

function miniCss() {
  return gulp.src('./images/css/**/*.css')
    .pipe(uglifycss())
    .pipe(gulp.dest('./ready-file/demo-file/demo/assets/css/'))
}

function watch() {
  gulp.watch('./*.scss', style);
}

exports.default = series(style, copyHtml, copyfonts, copywebfonts, copyImages, copyJs, miniJs, copyCss, miniCss, copyContactPhp, copySass);

exports.watch = watch;
exports.style = style;
exports.copyHtml = copyHtml;
exports.copyfonts = copyfonts;
exports.copywebfonts = copywebfonts;
exports.copyImages = copyImages;
exports.miniJs = miniJs;
exports.copyJs = copyJs;
exports.copyCss = copyCss;
exports.miniCss = miniCss;
exports.copyContactPhp = copyContactPhp;
exports.copySass = copySass;