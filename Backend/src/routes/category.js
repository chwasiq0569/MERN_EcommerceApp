const express = require('express');
const { adminMiddleware, requireSignIn } = require('../common-middleware');
const { addCategory, getCategories } = require('../controllers/category');
const router = express.Router();

router.post('/category/create',requireSignIn,adminMiddleware,  addCategory)
router.get('/category/getCategories',  getCategories)

module.exports = router;