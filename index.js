let express=require("express");
let app=express();
let port=3000;

app.get("/",(req,res)=>{
    res.send("Hii There!");
});

app.get("/apple",(req,res)=>{
    let link="https://t4.ftcdn.net/jpg/02/52/93/81/360_F_252938192_JQQL8VoqyQVwVB98oRnZl83epseTVaHe.jpg"
    res.render("apple.ejs",{link});
});
app.listen(port,()=>{
    console.log("App is listening on port 3000");
});
