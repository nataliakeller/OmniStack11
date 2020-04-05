const connection = require('../database/connection')

//Listando casos específicos de um ID 
module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
        .where('ong_id', ong_id)
        .select('*');

        return response.json(incidents); 
    }
}
    