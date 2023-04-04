const express = require("express");
const router = express.Router();
const {
  addUser,
  getAllUsers,
  getUser,
  registro,
  updateUser,
  deleteUser,
  logout,
  miPerfil,
  editarPassword,
  checkEditarPassword,
} = require("../controllers/user_controller");

const authMiddleware = require("../middleware/authMiddleware");
const guestMiddleware = require("../middleware/guestMiddleware");
const validations = require("../middleware/validateRegisterMiddleware");

router.get("/all", getAllUsers);
router.get("/get/:id", guestMiddleware, getUser);
router.get("/new", registro);
router.post("/new", validations, addUser);
router.put("/update/:id", validations, updateUser);
router.delete("/delete/:id", validations, guestMiddleware, deleteUser);
router.get("/logout", logout);
router.get("/profile", authMiddleware, miPerfil);
router.get("/profile/password/:id", editarPassword);
router.post("/profile/password/change/:id", checkEditarPassword);

module.exports = {
  routes: router,
};
