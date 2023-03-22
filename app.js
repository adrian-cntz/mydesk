var createError = require("http-errors");
const express = require("express");
var path = require("path");
const methodOverride = require("method-override");
const cookies = require("cookie-parser");
var logger = require("morgan");
const session = require("express-session");
const userLoggedMiddleware = require("./src/middleware/userLoggedMiddleware");
const app = express();

//Rutas
var indexRouter = require("./src/routes/index");
var usersRouter = require("./src/routes/users");
var loginRouter = require("./src/routes/auth");
var reservaRouter = require("./src/routes/reserva");
var puestoRouter = require("./src/routes/puestos");
var contactoRouter = require("./src/routes/contacto");

app.set("views", path.join(__dirname, "./src/views"));

app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookies());
app.use(
  session({
    key: "cookie_usuario",
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(methodOverride("_method"));
app.use(userLoggedMiddleware);
app.use(express.static(path.join(__dirname, "./public")));

app.set("view engine", "ejs");

//Rutas
app.use("/", indexRouter.routes);
app.use("/user", usersRouter.routes);
app.use("/place", puestoRouter.routes);
app.use("/login", loginRouter.routes);
app.use("/booking", reservaRouter.routes);
app.use("/contact", contactoRouter.routes);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: err,
  });
});

module.exports = app;