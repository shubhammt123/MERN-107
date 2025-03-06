const http = require("http");


let data = [];

const server = http.createServer((req,res)=>{
    if(req.url === "/" && req.method === "GET"){
        res.end(JSON.stringify(data));
    }else if(req.url === "/" && req.method === "POST"){
        let body = "";

        req.on("data",(chunk)=>{
            body += chunk
        });

        req.on("end",()=>{
            data.push(JSON.parse(body));
            res.end(body);
        })
    }
});

server.listen(3000 , "localhost",()=>{
    console.log("Server is running on 3000 port")
})