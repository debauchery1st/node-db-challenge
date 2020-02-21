exports.up = function(knex) {
  return knex.schema.createTable("project_tasks", tbl => {
    tbl.increments();
    // Foregn Keys
    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("project")
      .onUpdate("CASCADE");
    tbl
      .integer("resource_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("resource")
      .onUpdate("CASCADE");
    tbl
      .integer("task_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("task")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("resource");
};
