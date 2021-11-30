const express = require('express');
const {addUser, 
       getAllUsers, 
       getUser,
       updateUser,
       deleteUser,
       logout
      } = require('../controllers/user_controller');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');


router.get('/users', getAllUsers);
router.get('/user/:id', authMiddleware, getUser);
router.post('/user', addUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

router.get('/logout', logout)

module.exports = {
    routes: router
}