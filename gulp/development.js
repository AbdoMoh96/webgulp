const webGulp = require('./global/global');

/*===development===configuration==*/
function scssTask(){
    return webGulp.gulp.src('./app/sass/index.scss')
    .pipe(webGulp.sourcemaps.init({loadMaps: true}))
    .pipe(webGulp.sass().on('error', webGulp.sass.logError))
    .pipe(webGulp.cssimport())
    .pipe(webGulp.autoprefixer())
    .pipe(webGulp.rename('style.css'))
    .pipe(webGulp.sourcemaps.write('./'))
    .pipe(webGulp.gulp.dest(webGulp.appPath+'/css/'))
    .pipe(webGulp.browserSync.stream());
}

function jsTask(){
    return (
        webGulp.gulp.src('./app/js/index.js')
            .pipe(webGulp.webpack(require('../webpack.dev.js')))
            .pipe(webGulp.gulp.dest(webGulp.appPath+'/js/'))
            .pipe(webGulp.browserSync.stream())
    );
}

function htmlTask(){
    return webGulp.gulp.src('./app/**/*.html');
}



async function devTasks(){
   await scssTask();
   await jsTask();
}


function serve(){
    webGulp.browserSync.init({
        server:{
            baseDir: './app',
        },
            notify: false,
            port: 8000
    });
    webGulp.gulp.watch('./app/sass/**/*.scss' , scssTask).on('change' , webGulp.browserSync.reload);
    webGulp.gulp.watch('./app/js/**/*.js' , jsTask).on('change' , webGulp.browserSync.reload);
    webGulp.gulp.watch('./app/**/*.html' , htmlTask).on('change' , webGulp.browserSync.reload);
}

function watch(){
    webGulp.gulp.watch('./app/sass/**/*.scss' , scssTask);
    webGulp.gulp.watch('./app/js/**/*.js' , jsTask);
    webGulp.gulp.watch('./app/**/*.html' , htmlTask);
}


module.exports = {
    devTasks,
    serve,
    watch
}
/*end==development===configuration==*/