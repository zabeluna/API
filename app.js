const express = require("express");
const cors = require("cors"); // módulo para evitar problema de cors
const app = express(); //para centralizar configurações da aplicação

//declarando as aplicações:

app.use(cors());

app.use(express.json());

//DB connection
const conn = require("./db/conn");
//main
conn();

// routes

const routes = require("./routes/router");

app.use("/api", routes);

app.listen(3000, function () {
  console.log("Servidor Online!");
});
