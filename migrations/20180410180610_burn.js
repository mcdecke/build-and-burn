exports.up = function(knex, Promise) {
  return knex.schema.createTable('burn', function(table) {
    table.increments()
    table.string('colname1', 255).notNullable().defaultTo('a')
    table.string('colname2', 255).notNullable().defaultTo('b')
    table.string('colname3', 255).notNullable().defaultTo('c')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('burn')
};
