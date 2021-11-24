
const poolDB = require('../config/db');

class Users {
    constructor(id, id_usuario, nombre, legajo, password, mail, 
        empresa_id, escritorio_id, edificio_id){
            this.id = id,
            this.id_usuario = id_usuario;
            this.nombre = nombre;
            this.legajo = legajo;
            this.password = password;
            this.mail = mail
            this.empresa_id = empresa_id;
            this.escritorio_id = escritorio_id;
            this.edificio_id = edificio_id;
    }
}

module.exports = Users;