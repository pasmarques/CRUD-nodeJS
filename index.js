const express = require('express');
const router = require('./routers/index');
const app = express();
const port = 3000;
const conexao = require("./infraestrutura/conexao");
const tabelas = require("./infraestrutura/tabelas");

tabelas.init(conexao);

router(app);

app.listen(port, (err)=>{
  if(err){
    console.log("deu erro");
    return;
  }
  console.log("sucesso");
})