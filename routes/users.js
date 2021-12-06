const express = require('express');
const router = express.Router();
const {addUser, 
       getAllUsers, 
       getUser,
       registro,
       updateUser,
       deleteUser,
       logout,
       miPerfil
      } = require('../controllers/user_controller');

const authMiddleware = require('../middleware/authMiddleware');
const guestMiddleware = require('../middleware/guestMiddleware');
const validations = require('../middleware/validateRegisterMiddleware');


router.get('/users', getAllUsers);
router.get('/user/:id',  getUser);
router.get('/crear',   registro)
router.post('/user/crear', validations, addUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.get('/logout', logout);
router.get('/miperfil',  miPerfil);

module.exports = {
    routes: router
}