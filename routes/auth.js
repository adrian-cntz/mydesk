const express = require('express');
const {login, viewLogin} = require('../controllers/auth_controller');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', authMiddleware, viewLogin);
router.post('/auth', login);



module.exports = {
    routes: router
}