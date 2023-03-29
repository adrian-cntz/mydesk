"use strict";
const poolDB = require("../database/config/db");

const home = async (req, res) => {
  console.log(req.cookies.legajo);
  const legajo = req.cookies.legajo;
  const sql = `SELECT * from usuarios WHERE legajo = ${legajo}`;

  try {
    const { rows } = await poolDB.query(sql);
    res.render("./user/workspaces-list", { rows });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  home,
};
