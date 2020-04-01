// Arquivo para rotas

const express = require('express'); // Importando o express

const OngController = require('./controllers/OngController'); // Importando OngController
const IncidentController = require('./controllers/IncidentController'); // Importando OngController

const connection = require('./database/connection'); // Fazendo a conexão com o banco de dados

const routes = express.Router(); // Retirando o módulo de rotas em uma nova variável

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

module.exports = routes; // exportando as rotas