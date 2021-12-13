const express = require('express');
const router = express.Router();
const {contact,addContacto,viewContacto} = require('../controllers/contacto_controller')

router.get('/new', contact);
router.post('/add', addContacto);
router.get('/list', viewContacto);

module.exports = {
    routes: router,
  };
  