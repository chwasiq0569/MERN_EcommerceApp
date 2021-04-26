const slugify = require('slugify');
const Category = require('../models/category');

exports.addCategory = (req, res) => {
    const categoryObj = {
        name: req.body.name,
        slug: slugify(req.body.name)
    }

    if(req.body.parentId){
        categoryObj.parentId = req.body.parentId
    }

    const category = new Category(categoryObj)
    category.save().then((category) => {
        res.status(200).json({ category })
    }).catch((error) => {
        res.status(400).json({error})
    })
}

exports.getCategories = (req, res) => {
   Category.find({ }).then((categories) => {
        res.status(200).json({ categories })
   }).catch((error) => {
       res.status(400).json({ error })
   })
}
