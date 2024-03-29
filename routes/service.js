const router = require("express").Router();

const serviceController = require("../controllers/serviceController");

// funções | req e res surgem daqui
router
  .route("/services")
  .post((req, res) => serviceController.create(req, res));

router.route("/services").get((req, res) => serviceController.getAll(req, res));
//significa que lá em params vai chegar um parametro chamado id
router
  .route("/services/:id")
  .get((req, res) => serviceController.get(req, res));

router
  .route("/services/:id")
  .delete((req, res) => serviceController.delete(req, res));

router
  .route("/services/:id")
  .put((req, res) => serviceController.update(req, res));

module.exports = router;
