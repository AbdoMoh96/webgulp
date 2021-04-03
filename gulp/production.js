const webGulp = require('./global/global');

/*===production===configuration==*/
function buildScssTask(){
    return webGulp.gulp.src('./app/sass/index.scss')
    .pipe(webGulp.sass())
    .pipe(webGulp.cssnano())//build
    .pipe(webGulp.autoprefixer())
    .pipe(webGulp.rename('style.css'))
    .pipe(webGulp.gulp.dest(webGulp.appDist+'/assets/css/'));
}

function buildJsTask(){
    return (
        webGulp.gulp.src('./app/js/index.js')
            .pipe(webGulp.webpack(require('../webpack.prod.js')))
            .pipe(webGulp.gulp.dest(webGulp.appDist+'/assets/js/'))
    );
}


function buildHtmlTask(){
    return webGulp.gulp.src('./app/**/*.html')
    .pipe(webGulp.htmlmin({ collapseWhitespace: true }))
    .pipe(webGulp.gulp.dest(webGulp.appDist+'/'));
}

function buildImageTask(){
    webGulp.gulp.src('./app/img/**')
        .pipe(webGulp.imagemin())
        .pipe(webGulp.gulp.dest(webGulp.appDist+'/img'));
}

function buildVideosTask(){
    webGulp.gulp.src('./app/videos/**')
        .pipe(webGulp.gulp.dest(webGulp.appDist+'/videos'));
}

async function buildTasks(){
   await buildScssTask();
   await buildJsTask();
   await buildHtmlTask();
   await buildImageTask();
   await buildVideosTask();
}


module.exports = {
    buildTasks
}
/*end==production===configuration==*/