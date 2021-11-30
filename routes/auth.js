const express = require('express');
const {login, viewLogin, authMiddleware} = require('../controllers/auth_controller');
const router = express.Router();
//const {authMiddleware} = require('../middleware/authMiddleware');

router.get('/',authMiddleware);
router.post('/auth', login);

module.exports = {
    routes: router
}