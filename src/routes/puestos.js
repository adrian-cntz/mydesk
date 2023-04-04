const express = require("express");
const router = express.Router();
const { getAll } = require("../controllers/puesto_controller");

router.get("/all", getAll);

module.exports = {
  routes: router,
};
