const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const incidents = await connection('incidents').select('*');
        return response.json(incidents)
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization; // Acessando o id da ONG. Headers armazena os dados da autenticação
    
        const [id] = await connection('incidents').insert({ // Fazendo a conexão e inserindo os dados na tabela
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id }) // Não consegui entender muito bem a utilização do id e result (1:09:40)
        // O id é automaticamente criado pelo increments
    },

   
    }