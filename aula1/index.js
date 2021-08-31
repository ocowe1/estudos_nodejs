const express = require("express");
const app = express();

app.listen(4000, function(erro){
    if(erro){
        console.log('ocorreu um erro')
    }else{
        console.log('servidor iniciado com sucesso')
    }
});

