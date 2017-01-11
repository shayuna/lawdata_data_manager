var express=require("express");
var app=express();
var getData=require("./routes/getData");
var issueError=require("./routes/issueError");

app.use("/get",getData);
app.use("/*",issueError);

app.listen(9000);