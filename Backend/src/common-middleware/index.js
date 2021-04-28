const jwt = require("jsonwebtoken");


module.exports.requireSignIn = (req, res, next) => {

    if(req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, process.env.JWT_SECURITY_KEY);
        req.user = user;
    }
    else res.status(400).json({msg: "Authorization Required"})
    next();
}

module.exports.userMiddleware = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECURITY_KEY);
    req.user = user;
 
    next();
}

module.exports.adminMiddleware = (req, res, next) => {
    // console.log(req.user)
    if(req.user.role !== 'admin'){
        return res.status(400).json({msg: "Access Denied"})
    }
    next();
}