const express = require('express');
const { adminMiddleware, userMiddleware, requireSignIn } = require('../common-middleware');
// const { addCategory, getCategories } = require('../controllers/category');
const { addItemToCart } = require('../controllers/cart');
const router = express.Router();

router.post('/user/cart/addtocart', requireSignIn, userMiddleware, addItemToCart)
// router.get('/category/getCategories',  getCategories)

module.exports = router;