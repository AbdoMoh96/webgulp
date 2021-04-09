const webGulp = require('./global/global');
const config = require('./global/config');

/*===development===configuration==*/
function scssTask(){
    return webGulp.gulp.src(config.sassSrc)
    .pipe(webGulp.sourcemaps.init({loadMaps: true}))
    .pipe(webGulp.sass().on('error', webGulp.sass.logError))
    .pipe(webGulp.cssimport())
    .pipe(webGulp.autoprefixer(config.preFixer))
    .pipe(webGulp.rename(config.sassDevDistName))
    .pipe(webGulp.sourcemaps.write('./'))
    .pipe(webGulp.gulp.dest(config.sassDevDist))
    .pipe(webGulp.browserSync.stream());
}

function jsTask(){
    return (
        webGulp.gulp.src(config.jsSrc)
            .pipe(webGulp.webpack(require('../webpack.dev.js')))
            .pipe(webGulp.gulp.dest(config.jsDevDist))
            .pipe(webGulp.browserSync.stream())
    );
}

function htmlTask(){
    return webGulp.gulp.src(config.htmlSrc);
}



async function devTasks(){
   await scssTask();
   await jsTask();
}


function serve(){
    webGulp.browserSync.init({
        server:{
            baseDir: config.baseDir,
        },
            notify: false,
            port: config.port
    });
    webGulp.gulp.watch(config.sassWatch , scssTask).on('change' , webGulp.browserSync.reload);
    webGulp.gulp.watch(config.jsWatch , jsTask).on('change' , webGulp.browserSync.reload);
    webGulp.gulp.watch(config.htmlWatch , htmlTask).on('change' , webGulp.browserSync.reload);
}

function watch(){
    webGulp.gulp.watch(config.sassWatch , scssTask);
    webGulp.gulp.watch(config.jsWatch , jsTask);
    // webGulp.gulp.watch(config.htmlWatch , htmlTask);
}


module.exports = {
    devTasks,
    serve,
    watch
}
/*end==development===configuration==*/