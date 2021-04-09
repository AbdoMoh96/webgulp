const webGulp = require('./global/global');
const config = require('./global/config');

/*===production===configuration==*/
function buildScssTask(){
    return webGulp.gulp.src(config.sassSrc)
    .pipe(webGulp.sass())
    .pipe(webGulp.cssnano())//build
    .pipe(webGulp.autoprefixer(config.preFixer))
    .pipe(webGulp.rename(config.sassProdDistName))
    .pipe(webGulp.gulp.dest(config.sassProdDist));
}

function buildJsTask(){
    return (
        webGulp.gulp.src(config.jsSrc)
            .pipe(webGulp.webpack(require('../webpack.prod.js')))
            .pipe(webGulp.gulp.dest(config.jsProdDist))
    );
}


function buildHtmlTask(){
    return webGulp.gulp.src(config.htmlSrc)
    .pipe(webGulp.htmlmin({ collapseWhitespace: true }))
    .pipe(webGulp.gulp.dest(config.htmlDist));
}

function buildImageTask(){
    webGulp.gulp.src(config.imageSrc)
        .pipe(webGulp.imagemin())
        .pipe(webGulp.gulp.dest(config.imageProdDist));
}

function buildVideosTask(){
    webGulp.gulp.src(config.videoSrc)
        .pipe(webGulp.gulp.dest(config.videoProdDist));
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