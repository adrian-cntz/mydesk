const express = require('express');
const {login} = require('../controllers/auth_controller');
const router = express.Router();

router.post('/auth', login);

module.exports = {
    routes: router
}