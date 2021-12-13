var express = require('express');
var router = express.Router();
const {home} = require('../controllers/index_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/home', home);


module.exports = {
  routes: router
}
