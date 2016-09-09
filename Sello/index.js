let express=require("express"); //imports Express so you can use node as a web server
let app=express(); //opens up a new web server
let port=3000; // sets the port number to use, i.e. http://locahost:port/

app.use(express.static("public")) //set the folder where all the assets are

//default route, ie. http://locahost:3000/
app.get("/",function (req,res){
    
res.sendFile("/public/index.html", {root:__dirname})    
    
})

// second route, ie. http://locahost:3000/onboarding
app.get("/onboarding",function (req,res){
    
res.sendFile("/public/onboarding.html", {root:__dirname})    
    
})
app.get("/home",function (req,res){
    
res.sendFile("/public/home.html", {root:__dirname})    
    
})

app.get("/test",function (req,res){
    
res.sendFile("/public/kylie-test.html", {root:__dirname})    
    
})


//start the actual web server
app.listen(port)