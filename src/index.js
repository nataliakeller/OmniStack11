// Esqueci de dar npm init -y
//Importando as funcionalidades do express

const express = require('express'); // Importando o módulo express pra dentro da variável express

const app = express(); // Variável para armazenar a aplicação. Criando a aplicação

app.use(express.json()); // Informando ao app/express, que estaremos utilizando json para o corpo das requisições

app.listen(3333); // Aplicação vai ser rodada na porta 3333 (localhost:3333)

app.post('/users', (request, response) => {      //Criando a primeira rota da aplicação

    const body = request.body;
    

    return response.json({
        evento: 'Omnistack',
        aluno: 'Natália Keller'
    });
        
});