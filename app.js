var express=require("express");
var app=express();
var getData=require("./getData");
var issueError=require("./issueError");

app.use("/get",getData);
app.use("/*",issueError);
var PORT = process.env.PORT || 8080;
app.listen(PORT);