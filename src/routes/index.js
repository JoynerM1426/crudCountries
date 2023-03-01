const express = require('express');
const contryRouter = require('./contry.router');
const cityRouter = require('./city.router');
const continentRouter = require('./continent.router');
const router = express.Router();

// colocar las rutas aquí


router.use("/countries", contryRouter)
router.use("/cities", cityRouter)
router.use("/continents", continentRouter)

module.exports = router;