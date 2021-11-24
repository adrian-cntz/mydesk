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
    //poolDB.findOne
}

//AGREGAR
const addUser = async (req, res, next) => {
   //poolDB.create()
}

module.exports = {
    addUser, 
    getAllUsers,
    getUser,
    //updateUser,
    //deleteUser
}