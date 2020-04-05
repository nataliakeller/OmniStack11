const knex = require('knex'); // Importando o knex
const configuration = require('../../knexfile') // Importando as configurações do banco de dados

const connection = knex(configuration.development);

module.exports = connection; // Exportando para outros arquivos a conexão com o banco de dados

