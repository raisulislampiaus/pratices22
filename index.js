const express = require("express");
const connectDB = require("./dbConnect");
const cors = require('cors')

connectDB()
const app = express();
app.use(express.json());
app.use(cors())
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));



const Products = require("./routes/Products");

const category = require('./routes/catagory')
const sizeCategory = require('./routes/sizeCategory')
const colorCategory = require('./routes/colorCategory')


app.use("/api/products/", Products);

app.use("/api/category/", category);
app.use("/api/sizeCategory/", sizeCategory);
app.use("/api/colorCategory/", colorCategory);


const port = process.env.PORT || 6000;

app.get("/", (req, res) => res.send("Hello World! from home api"));
app.listen(port, () => console.log(`Node JS Server Running at port ${port}`));
