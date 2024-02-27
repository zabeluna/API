const mongoose = require("mongoose");

//esqueleto
const { Schema } = mongoose;

//métodos
const serviceSchema = new Schema(
  {
    //passando objeto para dentro dele | objetox: determinar o tipo (tipar)

    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String, //URL
      required: true,
    },
  }, //para salvar a data de criação e utilização;
  { timestamps: true }
);

const Service = mongoose.model("Service", serviceSchema);
//exportação

module.exports = {
  Service,
  serviceSchema,
};
