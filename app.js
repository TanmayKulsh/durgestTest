const express = require("express");

const app = express();

app.get("/",function(req,resp){
    resp.sendFile("rage.html",{root:__dirname});
});
app.listen(3000);

console.log("3000");