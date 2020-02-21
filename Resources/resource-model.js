const db = require("../data/db-config.js");

module.exports = {
  getResources,
  getResourceById
};

function getResources() {
  return db("resource");
}

function getResourceById(id) {
  return db("resource").where({ id });
}
