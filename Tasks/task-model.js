const db = require("../data/db-config.js");

module.exports = {
  getTasks,
  getTasksById
};

function getTasks() {
  return db("task");
}

function getTasksById(id) {
  return db("task").where({ id });
}
