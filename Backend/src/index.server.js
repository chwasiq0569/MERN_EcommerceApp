const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const app = express();

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.zq4mb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => console.log("DB CONNECTED")).catch((err) => console.log("Error: ", err))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use("/api", userRoutes)

// mongodb+srv://admin:<password>@ecommrce.abkdv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const port = process.env.PORT || 5500;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})