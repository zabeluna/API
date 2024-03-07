const router = require("express").Router();

//service router

const servicesRouter = require("./service");

router.use("/", servicesRouter);

// party

const partyRouter = require("./parties");

router.use("/", partyRouter);

module.exports = router;
