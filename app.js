const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const user = os.userInfo();
const command = process.argv[2];
const tasks = require('./tasks.js');
const argsv = yargs.argv;



if (command === 'add') {
  const task = tasks.addTask(argsv.title, argsv.body);
  if (task) {
    console.log("Task added");
    tasks.displayTask(task);
  }
  else {
    console.log("Task not saved");
  }
} else if (command === 'list') {
  tasks.getAllTasks().forEach(task => tasks.displayTask(task));
}
else if (command === 'read') {
  const task = tasks.getTask(argsv.title);
  if (task) {
    tasks.displayTask(task);
  }
  else {
    console.log("Task not found");
  }
}
else if (command === 'delete') {
  const isTaskRemoved = tasks.deleteTask(argsv.title);
  console.log(isTaskRemoved ? "Task Deleted" : "Task not Deleted");
}