const express=require('express');

//create app 

const app=express();

//make app listen it is server

app.listen(7777,()=>{
    console.log("Server is running successfully on port number 7777");
});

//make requesthandling from server

app.use("/hello",(req,res)=>{
    res.send("Hello handler");
});

app.use("/test",(req,res)=>{
    res.send("test handler");
});

app.use((req,res)=>{
    res.send("Hello I am Back");
});