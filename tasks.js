const fs = require('fs');

const displayTask = (task) => {
  console.log(`Title : ${task.title}`);
  console.log(`Body : + ${task.body}`);
}

const fetchTasks = () => {
  try {
    return JSON.parse(fs.readFileSync('tasks.json'));
  } catch (error) {
    return [];
  }
}

const saveTasks = (tasks) => {
  fs.writeFileSync('tasks.json', JSON.stringify(tasks));
}

const addTask = (title, body) => {
  const tasks = fetchTasks()
  const task = {
    title,
    body
  }
  const duplicateTasks = tasks.filter(task => task.title === title);
  if (duplicateTasks.length === 0) {
    tasks.push(task);
    saveTasks(tasks)
    return task;
  }
  return
};

const getAllTasks = () => {
  return fetchTasks();
}

const deleteTask = (title) => {
  const tasks = fetchTasks();
  const filteredTasks = tasks.filter(task => task.title !== title);
  saveTasks(filteredTasks);
  return tasks.length !== filteredTasks.length;
}

const getTask = (title) => {
  const tasks = fetchTasks();
  const filteredTasks = tasks.filter(task => task.title === title);
  return filteredTasks[0];
}

module.exports = {
  addTask,
  getAllTasks,
  getTask,
  deleteTask,
  displayTask
};
