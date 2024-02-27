//renomeando
const { Service: ServiceModel } = require("../models/Service");
//
const serviceController = {
  //requeste and response, lembre-se de http
  create: async (req, res) => {
    try {
      //ou seja, as requisições do front
      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };
      //inserindo essas respostas no banco com:
      const response = await ServiceModel.create(service);

      res.status(201).json({ response, msg: "Serviço criado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
  //pegando os registros
  getAll: async (req, res) => {
    try {
      const services = await ServiceModel.find();
      //enviando o service para o front
      res.json(services);
    } catch (error) {
      //pegando possíveis erros
      console.log(error);
    }
  },
};

//exportando objeto

module.exports = serviceController;
