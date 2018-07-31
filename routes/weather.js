const express = require('express');
const router = express.Router();
const controllerWeather = require('../controllers/weather-controller')
/* GET home page. */
router.get('/',controllerWeather.getWeather)

module.exports = router;
