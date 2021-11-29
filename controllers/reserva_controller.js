const dbModel = require('../database/models/users_model');
const poolDB = require('../database/config/db');

const reserva_controller = {

    leerReserva: async (req, res, next) => {
        const sql = 'SELECT * from turnos';
        poolDB.query(sql, (err, rows, fields) =>{
        if(!err){
            res.send(rows)
        }
        else{
            console.error(err)
        }
    })
    },
    
    agregarReserva: (req, res) => {
    const sql = 'INSERT INTO turnos SET ?';
    const data = {
        fecha: req.body.fecha,
        empresa_id: 1,
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
    },

    cambiarReserva: async (req, res) => {
    const id = req.params.id;
    const {nombre, mail, password} = req.body;
    const sql = `UPDATE turnos SET nombre= '${nombre}', mail='${mail}', password= '${password}' WHERE id_usuario = ${id}`;
    /*await poolDB.query(sql, (err, rows, fields) =>{
        if(!err){
            res.send("El usuario se actualizo correctamente!");
        }
        else{
            console.error(err)
        }
    })*/
    },

    borrarReserva: async (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM turnos WHERE id_turno = ${id}`;
    /*await poolDB.query(sql, (err, rows, fields) =>{
        if(!err){
            res.send("La reserva se elimino correctamente!");
        }
        else{
            console.error(err)
        }
    })*/
    }
 
}

module.exports = reserva_controller;