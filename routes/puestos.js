const express = require('express');
const router = express.Router();
const {getlibres, getAll} = require('../controllers/puesto_controller');

router.get('/free', getlibres); //revisar
router.get('/all', getAll);

module.exports = {
    routes: router,
  };