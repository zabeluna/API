const mongoose = require("mongoose");

async function main() {
  //para verificar erros de conexão
  try {
    // cons conn no app.js
    await mongoose.connect("mongodb://localhost:27017/event_db");

    console.log("Conectado ao banco!");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
