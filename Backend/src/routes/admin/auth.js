const express = require('express');
const { signup, signin } = require('../../controllers/admin/auth');
const { validateRequestSignUp,validateRequestSignIn, isRequestValidated } = require('../../validators/auth');
const router = express.Router();

router.post('/admin/signup', validateRequestSignUp, isRequestValidated, signup);
router.post('/admin/signin', validateRequestSignIn, isRequestValidated, signin);

// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ user: 'profile' })
// });

module.exports = router;