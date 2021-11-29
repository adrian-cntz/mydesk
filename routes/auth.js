const express = require('express');
const {login, viewLogin} = require('../controllers/auth_controller');
const router = express.Router();

router.get('/', viewLogin);
router.post('/auth', login);



module.exports = {
    routes: router
}