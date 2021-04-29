const express = require('express');
const { adminMiddleware, requireSignIn } = require('../common-middleware');
const { addCategory, getCategories } = require('../controllers/category');
const router = express.Router();
const multer = require('multer');
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

router.post('/category/create',requireSignIn,adminMiddleware, upload.single('categoryImg'), addCategory)
router.get('/category/getCategories',  getCategories)

module.exports = router;