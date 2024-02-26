var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'db',
      user : 'root',
      password : 'myapp',
      database : 'usertest'
    }
  });

module.exports = knex