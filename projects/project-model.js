const db = require("../data/db-config.js");

module.exports = {
  getProjects,
  getProjectById,
  addProject
};

function getProjects() {
  return db("project");
}

function getProjectById(id) {
  return db("project").where({ id });
}

function addProject(project) {
  return db("project")
    .insert(p, "id")
    .then(p => getProjectById(p.id));
}
