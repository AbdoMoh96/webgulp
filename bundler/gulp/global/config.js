/*<==============HTML=SOURCE==============>*/
const htmlSrc = "../app/**/*.html";
const htmlDist = "../dist";
/*<============END=HTML=SOURCE============>*/

/*<==============SASS=SOURCE==============>*/
const sassSrc = "../app/sass/index.scss";
/*<============END=SASS=SOURCE============>*/

/*<==============SASS=DEST==============>*/
const sassDevDist = "../app/assets/css";
const sassDevDistName = "style.css";
const sassProdDist = "../dist/assets/css";
const sassProdDistName = "style.css";
const preFixer = [
           "last 10 years" ,
            ">1%" ,
            "not dead"];
/*<============END=SASS=DEST============>*/

/*<==============JAVASCRIPT=SOURCE==============>*/
const jsSrc = "../app/js/index.js";
/*<============END=JAVASCRIPT=SOURCE============>*/

/*<==============JAVASCRIPT=DEST==============>*/
const jsDevDist = "../app/assets/js";
const jsDevDistName = "script.js";
const jsProdDist = "../dist/assets/js";
const jsProdDistName = "script.js";
/*<============END=JAVASCRIPT=DEST============>*/

/*<==============IMAGE=SOURCE==============>*/
const imageSrc = "../app/img/**";
/*<============END=IMAGE=SOURCE============>*/

/*<==============IMAGE=DEST==============>*/
const imageProdDist = "../dist/img";
/*<============END=IMAGE=DEST============>*/

/*<==============VIDEO=SOURCE==============>*/
const videoSrc = "../app/videos/**";
/*<============END=VIDEO=SOURCE============>*/

/*<==============VIDEO=DEST==============>*/
const videoProdDist = "../dist/videos";
/*<============END=VIDEO=DEST============>*/

/*<==============LIVESERVER==============>*/
const baseDir = "../app";
const port = 8000;
const sassWatch = "../app/sass/**/*.scss";
const jsWatch = "../app/js/**/*.js";
const htmlWatch = "../app/**/*.html";
/*<============LIVESERVER================>*/

module.exports = {
  htmlSrc,
  htmlDist,
  sassSrc,
  sassDevDist,
  sassDevDistName,
  sassProdDist,
  sassProdDistName,
  jsSrc,
  jsDevDist,
  jsDevDistName,
  jsProdDist,
  jsProdDistName,
  imageSrc,
  imageProdDist,
  videoSrc,
  videoProdDist,
  baseDir,
  port,
  sassWatch,
  jsWatch,
  htmlWatch,
  preFixer
};
