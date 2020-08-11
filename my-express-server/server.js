const express = require('express');

const app = express();

app.get("/", function(req, res){
  res.send("Hello");
});

app.get("/contact", function(req, res){
  res.send("Conact me at: Niklas.Thomas@hotmail.com");
});

app.get("/about", function(req, res){
  res.send("My name is Niklas Tomas");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
