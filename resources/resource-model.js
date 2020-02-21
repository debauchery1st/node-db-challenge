const db = require("../data/db-config.js");

module.exports = {
  getResources,
  getResourceById,
  addResource,
  connectWithProjectTask
};

function connectWithProjectTask(resource_id, project_id, task_id) {
  db("project_tasks").insert({ project_id, resource_id, task_id });
}

function getResources() {
  return db("resource");
}

function getResourceById(id) {
  return db("resource").where({ id });
}

function addResource(resource) {
  return db("resource")
    .insert(resource, "id")
    .then(arrayOfOne => getResourceById(arrayOfOne[0]));
}
