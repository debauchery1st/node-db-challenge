const db = require("../data/db-config.js");

module.exports = {
  getProjects,
  getProjectById
};

function getProjects() {
  console.log("getProjects");
  return db("project");
}

function getProjectById(id) {
  return db("project").where({ id });
}
