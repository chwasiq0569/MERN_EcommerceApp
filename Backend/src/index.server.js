const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const app = express();

dotenv.config();

mongoose.set('useCreateIndex', true);
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.zq4mb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => console.log("DB CONNECTED")).catch((err) => console.log("Error: ", err))

app.use(express.json());
// app.use(bodyParser.urlencoded({
//     extended: true
//   }));
app.use("/api", authRoutes)
app.use("/api", adminRoutes)
app.use("/api", categoryRoutes)
app.use("/api", productRoutes)

// mongodb+srv://admin:<password>@ecommrce.abkdv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const port = process.env.PORT || 5500;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})