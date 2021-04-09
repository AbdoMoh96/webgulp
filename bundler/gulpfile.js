const dev = require('./gulp/development');
const build = require('./gulp/production');

exports.dev = dev.devTasks;

exports.serve = dev.serve;

exports.watch = dev.watch;

exports.build = build.buildTasks;

