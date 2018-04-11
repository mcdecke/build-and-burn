exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('burn').del()
    .then(function() {
      // Inserts seed entries
      return knex('burn').insert([
        {id: 1, colname1: 'a', colname2: 'b', colname3: 'c'},
        {id: 2, colname1: '1', colname2: '2', colname3: '3'},
        {id: 3, colname1: 'x', colname2: 'y', colname3: 'z'}
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('burn_id_seq', (SELECT MAX(id) FROM burn))")
      })
    })
}
