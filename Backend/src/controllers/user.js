// not using

const User = require("../models/user");
const jwt = require("jsonwebtoken");

module.exports.signup = (req, res) => {
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
    
}

module.exports.signin = (req, res) => {
    User.findOne({email: req.body.email}).then((user) => {
        if(user){
            if(user.authenticate(req.body.password)){
                var token = jwt.sign({ id: user.id }, process.env.JWT_SECURITY_KEY, { expiresIn: '1h' });
                const { _id, firstName, lastName, email, role, fullName } = user;
                res.status(201).json({
                    token,
                    _id, firstName, lastName, email, role, fullName
                })
            } 
            else res.status(400).json({
                message: "Invalid Password"
            })
        }
        else res.status(400).json({
            message: "Invalid Email"
        })
    })    
}