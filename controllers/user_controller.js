'use strict';
const dbModel = require('../database/models/users_model');
const poolDB = require('../database/config/db');
const bcryptjs = require('bcryptjs');


//OBTENER TODOS
const getAllUsers = async (req, res, next) => {
    const sql = 'SELECT * from usuarios';
    poolDB.query(sql, (err, rows, fields) =>{
        if(!err){
            res.send(rows)
        }
        else{
            console.error(err)
        }
    })
}

//OBTENER UNO
const getUser = async (req, res, next) => {
    const id = req.params.id;
    const sql = `SELECT * from usuarios WHERE id_usuario = ${id}`;
    poolDB.query(sql, (err, rows, fields) =>{
        if(!err){
            res.send(rows)
        }
        else{
            console.error(err)
        }
    })
}

//AGREGAR
const addUser = async (req, res, next) => {
    const sql = 'INSERT INTO usuarios SET ?';
    let passHaash = await bcryptjs.hash(req.body.password, 4);
    const data = {
        nombre: req.body.nombre,
        mail: req.body.mail,
        password: passHaash,
        legajo: req.body.legajo,
        empresa_id: 1,
        escritorio_id: 1,
        edificio_id: 1,
        es_admin: 0
    };

    poolDB.query(sql, data, (err, rows, fields) =>{
        if(!err){
            res.send(rows)
        }
        else{
            console.error(err)
        }
    })

}

//ACTUALIZAR
const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const {nombre, mail, password} = req.body;
    const sql = `UPDATE usuarios SET nombre= '${nombre}', mail='${mail}', password= '${password}' WHERE id_usuario = ${id}`;
    await poolDB.query(sql, (err, rows, fields) =>{
        if(!err){
            res.send("El usuario se actualizo correctamente!");
        }
        else{
            console.error(err)
        }
    })
}

//ELIMINAR
const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    const sql = `DELETE FROM usuarios WHERE id_usuario = ${id}`;
    await poolDB.query(sql, (err, rows, fields) =>{
        if(!err){
            res.send("El usuario se elimino correctamente!");
        }
        else{
            console.error(err)
        }
    })
}

module.exports = {
    addUser, 
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}