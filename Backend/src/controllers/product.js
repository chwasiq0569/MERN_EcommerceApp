const slugify = require('slugify');
const Product = require("../models/product");

exports.createProduct = (req, res) => {

    // res.status(200).json({ files: req.files, body: req.body })
    let productPicturesArr = [];

    const { name, price, description, productPictures, quantity, category } = req.body;

    if(req.files.length > 0){
        productPicturesArr = req.files.map(file => { 
            return { img: file.filename }
        })
    }

    const product = new Product({
        name, 
        slug: slugify(name), 
        price, 
        description,
        quantity, 
        productPictures: productPicturesArr, 
        createdBy: req.user._id,
        category
    })

    product.save().then((product) => {
        if(product){
            res.status(201).json({ product })
        }
    }).catch(error => res.status(400).json({ error }))
  
}   