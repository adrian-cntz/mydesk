const { Router } = require('express');
const express = require('express');
const router = express.Router();

const reserva_controller = require('../controllers/reserva_controller');

router.get('/leer', reserva_controller.leerReserva);

router.post('/nueva', reserva_controller.agregarReserva);

router.put('/editar', reserva_controller.cambiarReserva);

router.delete('/borrar', reserva_controller.borrarReserva);

module.exports = {
    routes: router
};