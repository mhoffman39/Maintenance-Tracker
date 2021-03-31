const mongoose = require('mongoose');
const Task = require('./model.js');

mongoose.connect('mongodb://localhost:27017/Tasks', {useNewUrlParser: true, useUnifiedTopology: true});


const arr = [
  {name: 'Change Furnace Air Filter', lastAccomplished: 3/15/2021, periodicity: 30, nextDue: 2021-03-28},
  {name: 'Replace Hot Water Heater', lastAccomplished: 3/1/2021, periodicity: 5475, nextDue: 3/1/2036},
  {name: 'Clean Behind Refrigerator', lastAccomplished: 2/1/2021, periodicity: 180, nextDue: 7/31/2021},
  {name: 'Vacuum Dryer Lint Trap', lastAccomplished: 1/1/2021, periodicity: 90, nextDue: 4/1/2021}
]

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database: Tasks');
  // Task.insertMany(arr, function(error, docs) {});
  // console.log('Documents inserted');
});

module.exports = {db}