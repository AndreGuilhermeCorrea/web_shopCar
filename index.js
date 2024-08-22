const express = require('express');
const app = express();
const db = require('./db/connection');

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O express está rodando na porta ${PORT}` )
});

//db conexão
db
    .authenticate()
    .then(()=>{
        console.log("Conectou ao banco com sucesso!");
    })
    .catch(err =>{
        console.log("Erro ao criar conexão com banco de dados", err);
    });

//rotas
app.get('/', (req, res)=>{
    res.send("Está Funcionando"); 
});