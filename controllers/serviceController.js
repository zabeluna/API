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
  get: async (req, res) => {
    try {
      // id => URL === GET
      const id = req.params.id;
      //resgatando serviço do banco
      const service = await ServiceModel.findById(id);

      if (!service) {
        res.status(404).json({ msg: "Serviço não encontrado." });
        return;
      }

      res.json(service);
    } catch (error) {
      console.log(error);
    }
  },
  //deletando serviços
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      //identificando se o serviço existe
      const service = await ServiceModel.findById(id);

      if (!service) {
        res.status(404).json({ msg: "Serviço não encontrado." });
        return;
      }

      const deletedService = await ServiceModel.findByIdAndDelete(id);

      res
        .status(200)
        .json({ deletedService, msg: "Serviço excluído com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
  //resgatando seviços(dados) e atualizando msgs
  update: async (req, res) => {
    const id = req.params.id;

    const service = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
    };
    //put
    const updateService = await ServiceModel.findByIdAndUpdate(id, service);

    if (!updateService) {
      res.status(404).json({ msg: "Serviço não encontrado." });
      return;
    }

    res.status(200).json({ service, msg: "Serviço atualizado com sucesso!" });
  },
};

//exportando objeto

module.exports = serviceController;
