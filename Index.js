console.log("Server Running");

const express = require("express");
var app = express();
var server = app.listen(3000,()=>{
    console.log("Listening at localhost:3000");
});

app.use(express.static("Page"));


let keys = {}

app.get("/post/:key/:value",(request,response)=>{
    console.log("got call");


    let data = JSON.parse(request.params.value);
    keys[request.params.key] = data;

    response.send(data)
});



app.get("/get/:key",(request,response)=>{
    console.log("got call");


    let data = keys[request.params.key]
    

    response.send(data)
});


app.get("/getAll",(request,response)=>{
    console.log("got call");
        
    response.send(keys)
});
