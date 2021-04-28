const express = require('express');
const { adminMiddleware, requireSignIn } = require('../common-middleware');
// const { addCategory, getCategories } = require('../controllers/category');
const router = express.Router();
const multer = require('multer');
const { createProduct } = require('../controllers/product');
// const upload = multer({ dest: 'uploads' })
const shortId = require('shortid');
const path = require('path')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, shortId.generate() + '-' + file.originalname)
    }
  })
const upload = multer({ storage: storage })

router.post('/product/create',requireSignIn, adminMiddleware, upload.array('productPicture'), createProduct)
// router.get('/category/getCategories', getCategories)

module.exports = router;