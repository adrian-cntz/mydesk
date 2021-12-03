'use strict';
//const dbModel = require('../database/models/users_model');
const poolDB = require('../database/config/db');

const viewReserva = async (req, res, next) => {
    const tipo = req.params.tipo;
    res.render("./user/seleccionar-turno");
}


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

//OBTENER POR FECHA
const getReservasFecha = async (req, res, next) => {
    const date = req.body.date;
    const sql = `SELECT * from turnos WHERE fecha = "${date}"`;
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
    //Puestos vacios
    const tipo = req.body.tipo;
    const sqlPuesto = `SELECT * FROM puestos WHERE tipo = ${tipo} AND estado = 0`;
    const sql = 'INSERT INTO turnos SET ?';    
    
    poolDB.query(sqlPuesto, (err, rows, fields) =>{
        if(!err){
            //res.send(rows[0])
            const id_puesto = rows[0].id_puesto;
//Reserva con 1er puesto vacio
            const data = {
                usuario_id: req.body.usuario_id,
                escritorio_id: id_puesto,
                fecha: req.body.fecha,
                estado: 1
            };
            poolDB.query(sql, data, (err, rows, fields) =>{
                if(!err){
//Actualiza estado del puesto
                    const sqlUpdatePuesto = `UPDATE puestos SET estado = 1 WHERE id_puesto = ${id_puesto}`;
                    console.log(sqlUpdatePuesto);
                    poolDB.query(sqlUpdatePuesto, (err, rows, fields) =>{
                        if(!err){
                            res.send(`Se reservo el puesto ${id_puesto}`)
                        }
                        else{
                        res.send(err)
                            console.error(err)
                        }
                    })
                }
                else{
                res.send(err)
                    console.error(err)
                }
            })
        }
        else{
            console.error(err)
        }
    })
    
}

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
}

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
    deleteReserva,
    getReservasFecha
}