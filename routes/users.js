const express = require("express");
const {
  addUser,
  getAllUsers,
  getUser,
  registro,
  updateUser,
  deleteUser,
  logout,
  miPerfil,
} = require("../controllers/user_controller");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const guestMiddleware = require("../middleware/guestMiddleware");
const validations = require("../middleware/validateRegisterMiddleware");

router.get("/users", getAllUsers);
router.get("/user/:id", authMiddleware, getUser);
router.get("/crear", guestMiddleware, registro);
router.post("/user/crear", validations, addUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.get("/logout", logout);
router.get("/miperfil", miPerfil);

module.exports = {
  routes: router,
};
