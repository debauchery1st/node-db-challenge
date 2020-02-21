const db = require("../data/db-config.js");

module.exports = {
  getTasks,
  getTasksById,
  addTask
};

function getTasks() {
  return db("task");
}

function getTasksById(id) {
  return db("task").where({ id });
}

function addTask(task) {
  return db("task")
    .insert(task, "id")
    .then(t => getProjectById(t.id));
}
