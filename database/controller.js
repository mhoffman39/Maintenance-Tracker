const tasks = require('./app.js');

exports.getTasks = async(req, res) => {
  const results = await tasks.getTaskers();
  res.send(results);
};

exports.createTasks = async(req, res) => {
  const date = req.body.nextDue.slice(0, 10);
  const task = req.body.name;
  const periodicity = parseInt(req.body.periodicity);
  await tasks.addTasker(date, task, periodicity);
  res.status(200);
};

exports.updateTasks = async(req, res) => {
  const id = req.originalUrl.slice(10);
  const date = req.body;
  await tasks.updateTasker(id, date);
  res.status(200);
};

exports.deleteTasks = async(req, res) => {
  const id = req.body;
  await tasks.deleteTasker(id);
};
