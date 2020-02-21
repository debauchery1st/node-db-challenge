exports.up = function(knex) {
  return knex.schema.createTable("resource", tbl => {
    tbl.increments();
    tbl.text("name", 255).notNullable();
    tbl.text("description", 512);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("resource");
};
