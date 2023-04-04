var express = require("express");
var router = express.Router();
const { home } = require("../controllers/index_controller");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", function (req, res, next) {
  res.render("index");
});
router.get("/home", authMiddleware, home);

module.exports = {
  routes: router,
};
