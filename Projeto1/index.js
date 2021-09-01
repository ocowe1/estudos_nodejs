const express = require('express');
const app = express();
//const ejs = require('ejs');

app.get('/', (req, res) => {
    res.send("Bem vindo ao meu site");
});

app.listen(4000, () => {
    console.log("Aplicação rodando.");
});