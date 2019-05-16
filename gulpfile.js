const { series, parallel } = require("gulp");
const webpack = require("webpack");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const plumber = require("gulp-plumber");
const browserSync = require("browser-sync").create();
const compress = require("compression");

let count = 0;
const task = cb => {
  console.log("run" + count);
  count++;
  cb();
};
exports.task = task;

exports.default = task;
exports.seriesTask = series(
  task,
  task,
  task,
  task,
  task,
  task,
  task,
  task,
  task,
  task
);

exports.parallelTask = parallel(
  task,
  task,
  task,
  task,
  task,
  task,
  task,
  task,
  task,
  task
);
