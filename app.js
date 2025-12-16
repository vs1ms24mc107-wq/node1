const express=require("express")
const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello from express");
});

app.listen(5000,"0.0.0.0",()=>{
  console.log("app running on 5000 port");
});

