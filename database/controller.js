const tasks = require('./app.js');

exports.getTasks = async(req, res) => {
  const results = await tasks.getTaskers();
  res.send(results);
};

exports.createTasks = async(req, res) => {
  console.log('test post')
};

exports.updateTasks = async(req, res) => {
  const id = req.originalUrl.slice(10);
  const date = req.body;
  const results = await tasks.updateTasker(id, date);
  res.status(200);
};

exports.deleteTasks = async(req, res) => {
  console.log('test delete')
};
