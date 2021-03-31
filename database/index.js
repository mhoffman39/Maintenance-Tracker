const mongoose = require('mongoose');
const Task = require('./model.js');

mongoose.connect('mongodb://localhost:27017/Tasks', {useNewUrlParser: true, useUnifiedTopology: true});


const arr = [
  {name: 'Drain sediment from water heater', periodicity: 365, nextDue: '2021-3-28'},
  {name: 'Lubricate garage door springs', periodicity: 400, nextDue: '2022-3-1'},
  {name: 'Clean behind washer/dryer', periodicity: 365, nextDue: '2021-7-31'},
  {name: 'Wash windows', periodicity: 365, nextDue: '2021-5-1'},
  {name: 'Test smoke detectors',  periodicity: 60, nextDue: '2021-4-13'},
  {name: 'Change Furnace Air Filter', periodicity: 35, nextDue: '2021-3-28'},
  {name: 'Vacuum dryer lint trap', periodicity: 400, nextDue: '2021-9-1'},
  {name: 'Clean behind refrigerator', periodicity: 365, nextDue: '2021-7-31'},
  {name: 'Shampoo carpets', periodicity: 700, nextDue: '2021-10-1'},
  {name: 'Replace hot water heater',  periodicity: 1000, nextDue: '2025-4-13'},
  {name: 'Clean dishwasher filter', periodicity: 200, nextDue: '2021-7-28'},
  {name: 'Check fire extinguishers', periodicity: 70, nextDue: '2021-4-15'},
  {name: 'Test sump pump', periodicity: 365, nextDue: '2021-10-31'},
  {name: 'Clean chimney', periodicity: 365, nextDue: '2021-5-1'},
  {name: 'Seal driveway',  periodicity: 1000, nextDue: '2022-4-13'}
]

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database: Tasks');
  // Task.insertMany(arr, function(error, docs) {});
  // console.log('Documents inserted');
});

module.exports = {db}