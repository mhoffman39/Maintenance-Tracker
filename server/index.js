const express = require('express');
const app = express();
const port = 3000;
const controller = require('./database/controller.js')
const database = require('./database/index.js')

app.use(express.json())

app.get('/tasks', controller.getTasks);

app.post('/tasks', controller.createTasks);

app.put('/tasks', controller.updateTasks);

app.delete('/tasks', controller.deleteTasks);

app.listen(port, () => {
  console.log('Server listening on port ', port);
})