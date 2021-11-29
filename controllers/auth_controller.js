'use strict';
const poolDB = require('../database/config/db');
const bcryptjs = require('bcryptjs');

const viewLogin = async (req,res) => {
    res.render('login');
}

const login = async (req, res) => {
    const legajo = req.body.legajo;
    const pass = req.body.password;
    //let passHaash = await bcryptjs.hash(pass, 4);

    if(legajo && pass){
        const sql = `SELECT * FROM usuarios WHERE legajo = ${legajo}`;
        poolDB.query(sql, async (err, rows) => {
            
            if(rows.length == 0){
                res.send('Usuario o contraseña incorrecta');
            }else{
                const p = rows[0].password;
                const id = rows[0].id_usuario;
                if(!await bcryptjs.compare(pass, p)){
                res.send('Usuario o contraseña incorrecta');
                res.send(req.session.userLogged);
                }else{
                    
                    res.send(`Bienvenido ${id}`);
                }
            }
        })
    }else{
        res.send('Usuario o contraseña incorrecta');
    }
};

function authMiddleware(req, res, next) {
    if(!req.session.userLogged) {
        return res.redirect('/login');
    }
    next();
}


module.exports = {
    login,
    viewLogin,
    authMiddleware
}