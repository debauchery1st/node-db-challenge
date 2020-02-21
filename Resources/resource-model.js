const db = require("../data/db-config.js");

module.exports = {
  getResources,
  getResourceById,
  addResource
};

function getResources() {
  return db("resource");
}

function getResourceById(id) {
  return db("resource").where({ id });
}

function addResource(resource) {
  return db("resource")
    .insert(resource, "id")
    .then(r => getProjectById(r.id));
}
