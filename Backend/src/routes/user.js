const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/signup", (req, res) => {
    res.send("<h1>HELLO WORLD</h1>")
})

module.exports = router