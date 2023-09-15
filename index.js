const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        fs.readFile("home.html","UTF-8",(err,data)=>{
            if(err){
                console.log("Error"+err);
                res.end("Error is Coming...!");
            }
            else{
                res.end(data);
            }
        });
    }
    else if(req.url=="/about"){
        fs.readFile("about.html","UTF-8",(err,data)=>{
            if(err){
                console.log("Error"+err);
                res.end("Error is Coming...!");
            }
            else{
                res.end(data);
            }
        });
    }
    else if(req.url=="/contact"){
        fs.readFile("contact.html","UTF-8",(err,data)=>{
            if(err){
                console.log("Error"+err);
                res.end("Error is Coming");
            }
            else{
                res.end(data);
            }
        })
    }
    else if(req.url=="/login"){
        fs.readFile("login.html","UTF-8",(err,data)=>{
            if(err){
                console.log("Error"+err);
                res.end("Error is Coming");
            }
            else{
                res.end(data);
            }
        });
    }
    else if(req.url=="/signup"){
        fs.readFile("signup.html","UTF-8",(err,data)=>{
            if(err){
                console.log("Error"+err);
                res.end("Error is Coming");
            }
            else{
                res.end(data);
            }
        });
    }
});

server.listen(1020,()=>{
    console.log("Server is Listening on Port 1020");
});