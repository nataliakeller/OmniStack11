// Arquivo para rotas

const express = require('express'); // Importando o express
const crypto = require('crypto'); // Importando um pacote, crypto no caso. 
const connection = require('./database/connection') // Fazendo a conexão com o banco de dados

const routes = express.Router() // Retirando o módulo de rotas em uma nova variável

routes.post('/ongs', async (request, response) => {      //Criando a primeira rota da aplicação
    const { name, email, whatsapp, city, uf } = request.body; // Preenchimento do cadastro

    const id = crypto.randomBytes(4).toString('HEX'); // Gerando o ID para a ONG usando o crypto
    
    /*
    * Explicação sobre o await: como o insert pode demorar para ser finalizado, é necessário 
    * retornar o resultado dessa ong (que foi recem criada) só depois que esse insert foi finalizado. 
    * Por isso fazemos uso do async/await
    */
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })
    return response.json({ id });
        
});

module.exports = routes; // exportando as rotas