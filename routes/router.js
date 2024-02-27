const router = require("express").Router();

//service router

const servicesRouter = require("./service");

router.use("/", servicesRouter);

module.exports = router;
