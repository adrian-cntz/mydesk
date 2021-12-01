const { Router } = require("express");
const express = require("express");
const router = express.Router();
//const {authMiddleware} = require('../controllers/auth_controller');

const {addReserva, 
      getAllReservas,
      getReserva,
      updateReserva,
      deleteReserva}= require("../controllers/reserva_controller");

//router.get('', authMiddleware, reserva_controller.viewReserva);

router.get("", getAllReservas);

router.get("/:id", getReserva);

router.post("/nueva", addReserva);

router.put("/editar/:id", updateReserva);

router.delete("/borrar/:id", deleteReserva);

module.exports = {
  routes: router,
};
