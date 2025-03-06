const express = require("express");
const {getAllProducts , createProduct , updateProduct , deleteProduct , getOneProduct} = require("../controllers/product");

const router = express.Router();

router.get("/getAllProducts",getAllProducts);

router.post("/createProduct",createProduct);

router.put("/updateProduct/:id",updateProduct);

router.delete("/deleteProduct/:id",deleteProduct);

router.get("/getOneProduct/:id",getOneProduct);

module.exports = router;