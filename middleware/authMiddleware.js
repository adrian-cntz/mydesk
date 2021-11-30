
const authMiddleware = async(req, res, next) =>{
	if(!req.session.userLogged) {
        res.render('login');
    }
    next();
}

module.exports = authMiddleware;