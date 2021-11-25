'use strict';
const dbModel = require('../models/users_model');
const poolDB = require('../config/db');


//OBTENER TODOS
const getAllUsers = async (req, res, next) => {
    poolDB.query('SELECT * from usuarios', (err, rows, fields) =>{
        if(!err){
            res.send(rows)
        }
        else{
            console.error(err)
        }
    })
}

const getUser = async (req, res, next) => {
    const id = req.params.id;
    poolDB.query('SELECT * from usuarios WHERE id_usuario = '+ id, (err, rows, fields) =>{
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
    const data = req.body;
    /*poolDB.query('INSERT INTO `usuarios`(`id_usuario`, `nombre`, `mail`, `legajo`, `password`, `empresa_id`, `escritorio_id`, `edificio_id`, `es_admin`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]','[value-8]','[value-9]'), (err, rows, fields) =>{
        if(!err){
            res.send(rows)
        }
        else{
            console.error(err)
        }
    })*/
}

module.exports = {
    addUser, 
    getAllUsers,
    getUser,
    //updateUser,
    //deleteUser
}