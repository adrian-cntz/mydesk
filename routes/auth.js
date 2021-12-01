const express = require('express');
const {login, viewLogin, authMiddleware} = require('../controllers/auth_controller');
const router = express.Router();
const guestMiddleware = require('../middleware/guestMiddleware');

router.get('/', guestMiddleware, viewLogin);

router.post('/auth', login);

module.exports = {
    routes: router
}