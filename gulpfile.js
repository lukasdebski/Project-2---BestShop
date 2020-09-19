const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const entryPath = ".";

sass.compiler = require('sass'); // node-sass


function server(cb) {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    cb();
}

function css() {
    // jak jest return to nie musimy zakonczyc fuknji uzywajac cb();
    return gulp.src('./scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "expanded"
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        // autoprefixer musi zadzaialac po tym jak kompiluje scss do css, wtedy dodaje prefixy
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream())
}

function watch(cb) {
    gulp.watch('./scss/**/*.scss', gulp.series(css));
    gulp.watch("./*.html").on('change', browserSync.reload);
    cb();
}


// eksportowanie funkcji css na zewnatrz.
module.exports.css = css;
module.exports.watch = watch;
module.exports.default = gulp.series(server, css, watch);