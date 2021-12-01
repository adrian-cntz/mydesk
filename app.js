var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bcryptjs = require('bcryptjs');
const session = require('express-session');
const authMiddleware = require('./controllers/auth_controller');

//Rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/auth');
var reservaRouter = require('./routes/reserva');

const { application } = require('express');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//SESSION
app.use(session({
  key: 'cookie_usuario',
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

//Rutas
app.use('/', indexRouter);
app.use('/api', usersRouter.routes);
app.use('/login', loginRouter.routes);
app.use('/reserva', reservaRouter.routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});
/*
//rutas de las vistas generales
app.get('/acerca', function(req, res) {
  res.render('/general/sections/about', { });
});
app.get('/contacto', function(req, res) {
  res.render('/general/sections/contact', { });
});
app.get('/guia', function(req, res) {
  res.render('/general/sections/user-guide', { });
});

//rutas de las vistas del usuario común
app.get('/misturnos', function(req, res) {
  res.render('/user/user-reservations', { });
});
app.get('/espacios', function(req, res) {
  res.render('/user/workspaces-list', { });
});
app.get('/miperfil', function(req, res) {
  res.render('/user/user-profile', { });
});

//rutas de las vistas del usuario administrador
app.get('/admin/reservas', function(req, res) {
  res.render('/admin/user-reservations', { });
});
app.get('/admin/usuarios', function(req, res) {
  res.render('/admin/users-list', { });
});
app.get('/admin/nuevoregistro', function(req, res) {
  res.render('/admin/user-registration', { });
});
*/

module.exports = app;
