"use strict";
const poolDB = require("../database/config/db");

const home = (req, res) => {
  const legajo = req.cookies.legajo;

  const sql = `SELECT * from usuarios WHERE legajo = ${legajo}`;

  poolDB.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error al realizar la consulta");
    } else {
      res.render("./user/workspaces-list", { rows });
    }
  });
};

module.exports = {
  home,
};
