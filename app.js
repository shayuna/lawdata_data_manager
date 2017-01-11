var express=require("express");
var app=express();
var getData=require("./getData");
var issueError=require("./issueError");

app.use("/get",getData);
app.use("/*",issueError);

app.listen(9000);