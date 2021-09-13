const express = require('express');
const app = express();
const connection = require('./database/database');
const perguntaModel = require('./database/Pergunta');

connection
    .authenticate()
    .then(() => {
        console.log('conexão feita com o banco de dados');
    })
    .catch((mensagemErro) => {
        console.log(mensagemErro);
    })

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req,res) => {
    res.render('index', { tituloHead: 'Guia de Perguntas'});
});

app.get('/perguntar', (req,res) => {
    res.render('perguntar', { tituloHead: 'perguntar'});
});

app.post('/salvar', (req,res) => {
    var titulo = req.body.titulo;
    var pergunta = req.body.pergunta;
    res.send('Pergunta Salva');
})

app.listen(4000, () => {
    console.log("Aplicação rodando.");
});
