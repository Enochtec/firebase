module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'my_user',
      password: 'me', // replace with your actual password
      database: 'my_database'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
