const express = require("express");
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/products",productRoutes);
app.use("/users",userRoutes);

app.listen(3000,()=>{
    console.log("Server is running on 3000 port");
});