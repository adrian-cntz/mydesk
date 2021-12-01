<<<<<<< HEAD
//MIDDLEWARE PARA QUE SI NO TENES SESSION TE MANDE A INICIARLA
const authMiddleware = async(req, res, next) =>{
	if(!req.session.userLogged) {
        res.render('login');
        }
=======


const authMiddleware = async(req, res, next) =>{
	if(!req.session.userLogged) {
        res.render('login');
    }
    next();
>>>>>>> ca42d3bd9911074b8f8d8578703517891504fa39
}

module.exports = authMiddleware;