const express = require("express");
const app = express();

app.get('/', function(req, res){
    res.send("qual foi maluco")
});

app.get('/ola/:nome', function(req,res){
    var nome = req.params.nome
    res.send("quié " + nome)
})

app.get('pupupu/:pipipi?', function(req,res){
    var pipipi = req.params.pipipi

    if(pipipi){
        res.send(pipipi + " pupupu")
    }else{
        res.send(pupupu)
    }
})
app.listen(4000, function(erro){ 
    if(erro){
        console.log('ocorreu um erro')
    }else{
        console.log('servidor iniciado com sucesso')
    }
});

