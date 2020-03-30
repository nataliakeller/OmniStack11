// Arquivo para rotas

const express = require('express'); // Importando o express

const routes = express.Router() // Retirando o módulo de rotas em uma nova variável

routes.post('/users', (request, response) => {      //Criando a primeira rota da aplicação

    const body = request.body;
    

    return response.json({
        evento: 'testando',
        aluno: 'teste Keller'
    });
        
});

module.exports = routes; // exportando as rotas