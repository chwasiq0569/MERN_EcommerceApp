const Cart = require("../models/cart")

exports.addItemToCart = (req, res) => {
    Cart.findOne({user: req.user._id}).then((productCart) => {  
        const product = req.body.cartItems.product;
        if(productCart){
            const item = productCart.cartItems.find(cartItem => cartItem.product == product);
                    let condition, update; 
                    if(item){
                        condition = { "user": req.user._id, "cartItems.product": product };
                        update = {
                                "$set": {
                                    "cartItems.$": {
                                        ...req.body.cartItems,
                                        quantity: item.quantity + req.body.cartItems.quantity
                                    }
                                }
                            }
                     }
                     else {
                         condition = {user: req.user._id};
                         update = {
                                "$push": {
                                    "cartItems": req.body.cartItems 
                                 }
                            };
                     }
                     Cart.findOneAndUpdate(condition, update).then(cart => res.status(201).json({cart: cart})).catch(error => res.status(400).json({error: error}))
            }
            else{
                const cart = new Cart({user: req.user._id,cartItems: [req.body.cartItems]})
                cart.save().then(cart => res.status(201).json({ cart: cart })).catch(error => res.status(400).json({error: error}))
        }
    }).catch(error => res.status(400).json({error: error}))    
}