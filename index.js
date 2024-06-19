const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname,"public")))
app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"public/index.html"))
});
app.get("*",(req,res)=>{
  res.status(404).send("404 not found")
});
app.listen(8010,()=>{
  console.log("server running in port 8010")
})