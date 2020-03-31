const crypto = require('crypto'); // Importando um pacote, crypto no caso. 
const connection = require('../database/connection') // Fazendo a conexão com o banco de dados
module.exports = {
    async index(request, response) { // Listando as ongs cadastradas
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs)
    },



    async create(request, response){
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
    }
};