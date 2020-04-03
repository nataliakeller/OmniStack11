// Esqueci de dar npm init -y
//Importando as funcionalidades do express

const express = require('express'); // Importando o módulo express pra dentro da variável express
const cors = require('cors');
const routes = require('./routes');
//testando
const app = express(); // Variável para armazenar a aplicação. Criando a aplicação

app.use(cors());
app.use(express.json()); // Informando ao app/express, que estaremos utilizando json para o corpo das requisições
app.use(routes);

app.listen(3333); // Aplicação vai ser rodada na porta 3333 (localhost:3333)
