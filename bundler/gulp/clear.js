const fs = require('fs');
const rmDir = require("rimraf");
const boilers = require("./boilers.js");

/*deleting=files+Dir*/
// fs.unlink('' , () => {});
rmDir("./app/assets",  () => {});
rmDir("./app/js/scripts",  () => {});
/*deleting=files+Dir=end*/

/*deleting=file=contents*/
fs.truncate("./app/index.html", () => {});
fs.truncate("./app/js/index.js", () => {});
fs.truncate("./app/sass/styles/style.scss", () => {});
fs.truncate("./app/sass/styles/util/_colors.scss" , () => {});
/*deleting=file=contents=end*/

fs.appendFile("./app/index.html" , boilers.html , () => {});

