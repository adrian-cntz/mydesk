const express = require("express");
const router = express.Router();
const { viewReserva, addReserva, 
      getAllReservas,
      getReserva,
      updateReserva,
      deleteReserva,
      getReservasFecha,}= require("../controllers/reserva_controller");

router.get("/view/:tipo", viewReserva);
router.get("/all", getAllReservas);
router.get("/date", getReservasFecha);
router.get("/:id", getReserva);
router.post("/new", addReserva);
router.put("/update/:id", updateReserva);
router.get("/delete/:id/:rId", deleteReserva);

module.exports = {
  routes: router,
};
