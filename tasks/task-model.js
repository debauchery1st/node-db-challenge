const db = require("../data/db-config.js");

module.exports = {
  getTasks,
  getTasksById,
  addTask,
  updateTask
};

function getTasks() {
  return db("task");
}

function getTasksById(id) {
  return db("task").where({ id });
}

function connectWithProject(task_id, project_id) {
  return db("project_tasks").insert({ project_id, task_id });
}

function addTask(task, project_id) {
  if (!project_id) {
    return { error: "every task requires a project" };
  }
  return db("task")
    .insert(task, "id")
    .then(arrayOfOne => connectWithProject(arrayOfOne[0], project_id))
    .then(getTasksById(t.id));
}

function updateTask(task, id, project_id) {
  if (!id && !task.id) {
    return { error: "id required" };
  }
  if (!project_id && !task.project_id) {
    return { error: "project id required to update task" };
  }
  return db("task")
    .update(task)
    .where({ id })
    .then(arrayOfOne => getTasksById(arrayOfOne[0]));
}
