const Task = require('./model.js')


exports.getTaskers = async() => {
  const results = await Task.find({}).sort({nextDue: 'ascending'});
  return results;
};

exports.updateTasker = async(id, date) => {
  console.log(id, date)
  const dateString = date.nextDue.slice(0,10);
  await Task.updateOne({_id: id}, {nextDue: dateString}, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log(docs)
    }
  })
}

exports.addTasker = async(date, task, periodicity) => {
  const newTask = new Task({ name: task, nextDue: date, periodicity: periodicity });
  newTask.save(function (err, newTask) {
    if (err) return console.log(err)
  })
}

exports.deleteTasker = async(id) => {
  const deleteTask = await Task.deleteOne(id);
}