// Controller para ser efetuado o login
const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const ong = await connection('ongs') // Buscando uma ONG do banco de dados
        .where('id', id)
        .select('name')
        .first();

        if (!ong) {
            return response.status(400).json({error: 'No ONG found with this ID'});
        }

        return response.json(ong); // Se tudo der certo, mostrará o nome da ONG
    }

}