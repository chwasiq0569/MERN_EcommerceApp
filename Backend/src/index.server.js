const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
    res.send("<h1>HELLO WORLD</h1>")
})

// mongodb+srv://admin:<password>@ecommrce.abkdv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const port = process.env.PORT || 5500;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})