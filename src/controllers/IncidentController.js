const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query; // Paginação, pega a informação depois do ?
        const [ count ] = await connection('incidents').count(); // Contagem do número de casos

        const incidents = await connection('incidents')
            .limit(5)                 //Paginação
            .offset((page - 1 ) * 5) // Paginação
            .select('*');
        
        response.header('X-Total-Count', count['count(*)']); // Retornando no cabeçalho o número de casos
        
        return response.json(incidents);
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

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        
        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted' });
        }

        await connection('incidents').where('id', id).delete();
        return response.status(204).send();
    }
   
    }