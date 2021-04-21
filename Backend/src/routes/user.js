const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/signup", (req, res) => {
    User.findOne({
        email: req.body.email
    }).then((user) => {
        if(user){
            res.status(400).json({
                message: "User Already Exists"
            })
                }
        else{
            const { firstName,lastName, email, password } = req.body;
            const _user = new User({
                firstName,
                lastName, 
                email, 
                password, 
                username: Math.random().toString()});
            _user.save().then((user) => {
                return res.status(201).json({ 
                    message: "User Created Successfully.",
                    user: user 
                                            });
                                    }).catch((err) => {
                                        return res.status(201).json({
                                            message: "Something Went Wrong while Saving User!"
                                        })
                                    })
            }
    }).catch(err => res.status(400).json({
        message: "Something Went Wrong while Finding or Creating User!!"
    }))
    
})

module.exports = router