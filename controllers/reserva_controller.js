'use strict';
//const dbModel = require('../database/models/users_model');
const poolDB = require('../database/config/db');

const viewReserva = async (req, res, next) => {
    res.render("./user/seleccionar-turno");

};



//OBTENER TODOS
const getAllReservas = async (req, res, next) => {
    const sql = 'SELECT * from turnos';
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
const getReserva = async (req, res, next) => {
    const id = req.params.id;
    const sql = `SELECT * from turnos WHERE usuario_id = ${id}`;
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
const addReserva = async (req, res, next) => {
    const sql = 'INSERT INTO turnos SET ?';
    const data = {
        usuario_id: req.body.usuario_id,
        escritorio_id: req.body.escritorio_id,
        fecha: req.body.fecha,
        estado: req.body.estado
    };

    poolDB.query(sql, data, (err, rows, fields) =>{
        if(!err){
            res.send(rows)
        }
        else{
          res.send(err)
            console.error(err)
        }
    })


};


//ACTUALIZAR
const updateReserva = async (req, res, next) => {
    const id = req.params.id;
    const fecha = req.body.fecha;
    const sql = `UPDATE turnos SET fecha= '${fecha}' WHERE id_turno = ${id}`;
    await poolDB.query(sql, (err, rows, fields) =>{
        if(!err){
            res.send("La reserva se actualizo correctamente!");
        }
        else{
            console.error(err)
        }
    })


};

//ELIMINAR
const deleteReserva = async (req, res, next) => {
    const id = req.params.id;
    const sql = `DELETE FROM turnos WHERE id_turno = ${id}`;
    await poolDB.query(sql, (err, rows, fields) =>{
        if(!err){
            res.send("Lar reserva se elimino correctamente!");
        }
        else{
            console.error(err)
        }
    })
}

module.exports = {
    viewReserva, 
    getAllReservas,
    getReserva,
    addReserva,
    updateReserva,
    deleteReserva
}