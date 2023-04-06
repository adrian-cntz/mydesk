"use strict";
const poolDB = require("../database/config/db");

const getAll = async (req, res, next) => {
  const sql = "SELECT * from puestos";
  poolDB.query(sql, (err, rows, fields) => {
    if (!err) {
      res.render("./admin/place-list", { rows });
    } else {
      console.error(err);
    }
  });
};

module.exports = {
  getAll,
};
