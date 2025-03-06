const fs = require("fs");

const readData = ()=>{
    let data = fs.readFileSync("product.json","utf-8");
    let convertedData = JSON.parse(data);
    return convertedData;
}

const writeData = (data)=>{
    console.log(typeof data)
    fs.writeFileSync("product.json", JSON.stringify(data ,  null , 2));
}

const getAllProducts = (req,res)=>{ //http://localhost:3000/products/getAllProducts
    let productData = readData();
    res.send({message : "Product Fetched",products : productData});
}

const createProduct = (req,res)=>{ // http://localhost:3000/products/createProduct
    let reqBody = req.body;
    console.log(reqBody);
    let currentProductData = readData();
    reqBody.productId = Date.now();
    currentProductData.push(reqBody);
    writeData(currentProductData);
    res.send({message : "Product Added"});
}

const updateProduct = (req,res)=>{
    let productId = req.params.id;
    let reqBody = req.body;
    let currentProductData = readData();
    let indexOfProductData = currentProductData.findIndex((item)=>{return item.productId === +productId});
    if(indexOfProductData === -1){
        return res.send({message : "Product not found"})
    };
    let updatedProduct = {...currentProductData[indexOfProductData],...reqBody};
    currentProductData[indexOfProductData] = updatedProduct;
    writeData(currentProductData);
    res.send({message : "Product Updated"});
}

const deleteProduct = (req,res)=>{
    let productId = req.params.id;
    let currentProductData = readData();
    let remainingProducts = currentProductData.filter((item)=>{return item.productId !== +productId});
    writeData(remainingProducts);
    res.send("Delete Product");
}

const getOneProduct = (req,res)=>{
    let  productId = req.params.id;
    let currentProductData = readData();
    let oneProduct = currentProductData.filter((item)=>{return Number(item.productId) === +productId});
    console.log(oneProduct);
    res.send({message : `Product Fetched by id ${req.params.id}` , product  : oneProduct});
}

module.exports = {getAllProducts , createProduct , updateProduct , deleteProduct , getOneProduct};