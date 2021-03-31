const tasks = require('./app.js');

exports.getTasks = async(req, res) => {
  const results = await tasks.getTaskers();
  res.send(results);
};

exports.createTasks = async(req, res) => {
  console.log('test post')
};

exports.updateTasks = async(req, res) => {
  console.log('test put')
};

exports.deleteTasks = async(req, res) => {
  console.log('test delete')
};
