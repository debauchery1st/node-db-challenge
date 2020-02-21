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

function addTask(task, project_id, resource_id) {
  if (!project_id) {
    return { error: "every task requires a project" };
  }
  return db("task")
    .insert(task, "id")
    .then(t =>
      db("project_tasks").insert({ project_id, resource_id, task_id: t.id })
    )
    .then(getTasksById(t.id));
}

function updateTask(task, id, project_id, resource_id) {
  if (!id && !task.id) {
    return { error: "task id required" };
  }
  if (!project_id) {
    return { error: "project id required for update." };
  }
  return db("task")
    .update(task)
    .where({ id });
}
