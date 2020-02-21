exports.up = function(knex) {
  return knex.schema.createTable("project", tbl => {
    tbl.increments();
    tbl.text("name", 255).notNullable();
    tbl.text("description", 255);
    tbl.boolean("completed").defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("project");
};
