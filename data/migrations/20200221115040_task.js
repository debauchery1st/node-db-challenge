exports.up = function(knex) {
  return knex.schema.createTable("task", tbl => {
    tbl.increments();
    tbl.text("description", 512).notNullable();
    tbl.text("notes", 512);
    tbl.boolean("completed").defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("task");
};
