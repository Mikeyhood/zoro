let express=require("express");
let app=express();
let port=3000;

app.use(express.static("public"))

app.get("/",function (req,res){
    
res.sendFile("/public/index.html", {root:__dirname})    
    
})

app.get("/index2",function (req,res){
    
res.sendFile("/public/index2.html", {root:__dirname})    
    
})
app.listen(port)