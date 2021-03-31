const Task = require('./model.js')


exports.getTaskers = async() => {
  const results = await Task.find({}).sort({nextDue: 'ascending'});
  return results;
};

exports.updateTasker = async(id, date) => {
  const dateString = date.nextDue.slice(0,10);
  await Task.updateOne({_id: id}, {nextDue: dateString}, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Updated')
    }
  })
}