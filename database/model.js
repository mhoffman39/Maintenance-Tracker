const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = Schema({
  name: String,
  lastAccomplished: Date,
  nextDue: Date,
  periodicity: Number,
  youtube: String,
})

module.exports = mongoose.model('Task', taskSchema);