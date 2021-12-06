'use strict';
const poolDB = require('../database/config/db');


const home = async (req,res) => {
    console.log(req.cookies.legajo)
    const legajo = req.cookies.legajo;

    const sql = `SELECT * from usuarios WHERE legajo = ${legajo}`;
    
    await poolDB.query(sql, (err, rows, fields) =>{
        if(!err){
            const sqlpuestos1 = `SELECT * from puestos WHERE tipo = 1 AND estado = 0`;
            poolDB.query(sqlpuestos1, (err, p1, fields) =>{
                if(!err){
                    const pl1 = p1.length;
                    console.log(pl1);
                    const sqlpuestos2 = `SELECT * from puestos WHERE tipo = 2 AND estado = 0`;
                    poolDB.query(sqlpuestos2, (err, p2, fields) =>{
                        if(!err){
                            const pl2 = p2.length;
                            console.log(pl2);
                            const sqlpuestos3 = `SELECT * from puestos WHERE tipo = 3 AND estado = 0`;
                            poolDB.query(sqlpuestos3, (err, p3, fields) =>{
                                if(!err){
                                    const pl3 = p3.length;
                                    console.log(pl3);
                                    
                                res.render('./user/workspaces-list', {rows, pl1, pl2, pl3})
                                }
                                else{
                                    console.error(err)
                                }
                            })
                        }
                        else{
                            console.error(err)
                        }
                    })
                }
                else{
                    console.error(err)
                }
            })
        }
        else{
            console.error(err)
        }
    })
}



module.exports = {
    home
}