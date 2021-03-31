const Task = require('./model.js')


exports.getTaskers = async() => {
  const results = await Task.find({});
  return results;
};