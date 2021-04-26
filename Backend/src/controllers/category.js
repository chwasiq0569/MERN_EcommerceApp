const slugify = require('slugify');
const Category = require('../models/category');


function createCategory(categories, parentId = null){
    let categoryList = []
    let category;
    if(parentId == null){
        category = categories.filter(cat => cat.parentId == undefined)
    }
    else category = categories.filter(cat => cat.parentId == parentId) 

    for(cat of category){
        categoryList.push({
            _id: cat._id,
            name: cat.name,
            slug: cat.slug,
            children: createCategory(categories, cat._id)
        })
    }

    return categoryList
}

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
       if(categories){

        const categoryList = createCategory(categories);

        res.status(200).json({ categoryList })
       }
   }).catch((error) => {
       res.status(400).json({ error })
   })
}
