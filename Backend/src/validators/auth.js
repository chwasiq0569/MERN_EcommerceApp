const { check } = require('express-validator');
const { validationResult } = require('express-validator');

exports.validateRequestSignUp = [
    check('firstName').notEmpty().withMessage('First Name is Required'),
    check('lastName').notEmpty().withMessage('Last Name is Required'),
    check('email').notEmpty().withMessage('Valid Email is Required'),
    check('password').isLength({
        min: 6
    }).withMessage('Password must be of at least 6 character long'),
];

exports.validateRequestSignIn = [
    check('email').notEmpty().withMessage('Valid Email is Required'),
    check('password').isLength({
        min: 6
    }).withMessage('Password must be of at least 6 character long'),
];


exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0){
         return res.status(400).json({errors: errors.array()[0].msg })
    }
    next();
}