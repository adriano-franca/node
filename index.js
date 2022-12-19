const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Funcionou meu patrão");
});

app.get("/blog", function(req, res){
    res.send("www.twitter.com/");
});

app.get("/canal/youtube", function(req, res){
    res.send("www.youtube.com/");
});

app.listen(3030, function(erro){
    if(erro){
        console.log("ERRO!");
    }else{
        console.log("Servidor funcionando");
    }
})