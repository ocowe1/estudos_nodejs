const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.send(('Bem vindo a index'));
});

app.get('/:nome/:linguagem', (req, res) => {
    var nome = req.params.nome;
    var linguagem = req.params.linguagem;
    var exibirMensagem = false;

    var produtos = [
        {nome: 'Doritos', preco: 3.14},
        {nome: 'Coca-Cola', preco: 5},
        {nome: 'Leite', preco: 1.45}
    ]

    res.render('index', {
        nome: nome,
        linguagem: linguagem,
        empresa: 'UNIMES',
        inscritos: 1000,
        mensagem: exibirMensagem
    });
});

app.listen(4000, () => {
    console.log("Aplicação rodando.");
});
