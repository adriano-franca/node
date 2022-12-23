const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Funcionou meu patrão");
});

app.get("/blog/:artigo?", function(req, res){

    var artigo = req.params.artigo;

    if(artigo){
        res.send("www.instagram.com/");
    }else{
        res.send("www.twitter.com/");
    }
});

app.get("/canal/youtube/", function(req, res){
    var canal = req.query["canal"];
    if(canal){
        res.send("www.tiktok.com/");
    }else{
        res.send("www.youtube.com/");
    }
});

app.get("/ola/:nome", function(req, res){
    res.send("<h1>oi</h1>");
});

app.listen(3030, function(erro){
    if(erro){
        console.log("ERRO!");
    }else{
        console.log("Servidor funcionando");
    }
})