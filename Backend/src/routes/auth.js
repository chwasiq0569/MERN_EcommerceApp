const express = require('express');
const { signup, signin } = require('../controllers/auth');
const router = express.Router();
const { check } = require('express-validator');
const { validateRequestSignUp, isRequestValidated, validateRequestSignIn } = require('../validators/auth');


router.post('/signup', validateRequestSignUp, isRequestValidated , signup);
                        
router.post('/signin', validateRequestSignIn, isRequestValidated , signin);


// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ user: 'profile' })
// });

module.exports = router;