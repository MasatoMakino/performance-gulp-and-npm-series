const { series, parallel } = require("gulp");

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
