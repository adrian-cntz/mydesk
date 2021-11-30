const { Router } = require("express");
const express = require("express");
const router = express.Router();
const {authMiddleware} = require('../controllers/auth_controller');

const reserva_controller = require("../controllers/reserva_controller");

router.get('', authMiddleware, reserva_controller.viewReserva);
//router.get('/user/:id', reserva_controller.viewMisReserva)

router.get("", reserva_controller.viewReserva);

router.get("/leer", reserva_controller.leerReserva);

router.post("/nueva", reserva_controller.agregarReserva);

router.put("/editar", reserva_controller.cambiarReserva);

router.delete("/borrar", reserva_controller.borrarReserva);

module.exports = {
  routes: router,
};
