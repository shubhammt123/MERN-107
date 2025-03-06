// fs
// const fs = require("fs");

// const os = require("os");

// fs.writeFileSync("test.txt","Hello Grras, This is mern stack traning session");

// let data = fs.readFileSync("test.txt" , "utf-8");
// console.log(data);

// fs.writeFileSync("about.html","This is a html file")

// fs.writeFileSync("about.html","hfhkjsdhhasjkhfkjhdfjdbchbdfhbhdbfj");

// fs.appendFileSync("about.html","\njhjjdsahjhjsahdjhjsdhjshdshjdh");

// fs.mkdirSync("pages");

// fs.writeFileSync("./pages/test.txt","hello this is mern stack training session");

// fs.unlinkSync("about.html");

// fs.mkdirSync("images")

// fs.rmdirSync("images");

// fs.unlinkSync("./pages/test.txt")

// fs.rmdirSync("pages");


// fs.writeFileSync("test.txt" , data);

// let data = fs.readFileSync("test.txt","utf-8");
// console.log(data);

// fs.unlinkSync("test.txt");

// fs.writeFile("test.txt","hello this is grras solution",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File Created");
//     }
// });

// console.log("This is after file creation");

// let result = fs.readFile("test.txt","utf-8",(data,err)=>{
//     if(data){
//         console.log(data)
//     }else{
//         console.log(err);
//     }
// });

// console.log(result)

// fs.mkdir("images",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Folder created");
//     }
// })

// console.log("Hello grras");

// fs.rmdir("images",(err)=>{
//     if(err){
//         console.log(err);
//     }
// })

// fs.appendFile("test.txt","hjhsjhdjshjdhjhjdhjhsj",(err)=>{
//         console.log(err)
// })

// fs.unlink("test.txt",(err)=>{
//     console.log("File deleted");
// })

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.homedir());
// console.log(os.totalmem());
// console.log(os.freemem());

// const EventEmitter = require("events");

// const event = new EventEmitter();

// function handler(){
//     console.log("This is data event")
// }

// event.on("data",handler)

// event.once("data",()=>{
//     console.log("Data event called")
// })

// event.emit("data");
// event.emit("data");
// event.emit("data");

// event.off("data",handler);

// event.emit("data");

// const path = require("path");

// let dirName = path.dirname("C:/Users/shubh/Desktop/MERN107/nodejs");
// console.log(dirName)

// let baseName = path.basename("C:/Users/shubh/Desktop/MERN107/nodejs");

// console.log(baseName)

// let newPath = path.join("folder","images","pages");

// console.log(newPath)

// let newResolvedPath = path.resolve("test.txt");
// console.log(newResolvedPath)

// let extName = path.extname("C:/Users/shubh/Desktop/MERN107/nodejs/test.txt")

// console.log(extName)

const http = require("http");

// api - application program interface

const server = http.createServer((req,res)=>{
    if( req.method === "POST"){
        res.end("This is a request for / route & post method");
    }
});

server.listen(5000 , "localhost" , ()=>{
    console.log("Server is running on 5000 port");
})

// CRUD operations
// c - create , r - read , u - update , d - delete
// list all the products on frontend - read  
// list a single product on frontend - read
// add product by seller -   create 
// update product by seller and delivery partner - update
// delete product by seller - delete
// APIS - RESTFul APis
// create - post
// read - get
// update - put
// delete - delete
