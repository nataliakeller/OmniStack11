// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3', // Configuração do banco de dados utilizado
    connection: {
      filename: './src/database/db.sqlite' //Configuraçao de pasta
    },
    migrations: {
      directory: './src/database/migrations' // Configuração de pasta
    },
    useNullAsDefault: true, // Configuração para usar em default 
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
