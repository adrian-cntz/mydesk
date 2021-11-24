const poolDB = require('../config/db');

const users = function(user) {
    this.id_usuario = user.id_usuario,
    this.nombre = user.nombre,
    this.mail = user.mail,
    this.legajo = user.legajo,
    this.password = user.password,
    this.es_admin = user.es_admin,
    this.empresa_id = user.empresa_id,
    this.escritorio_id = user.escritorio_id,
    this.edificio_id = user.edificio_id
}

module.exports = users;