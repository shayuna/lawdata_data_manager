var express=require("express");
var app=express();
var getData=require("./getData");
var setData=require("./setData");
var issueError=require("./issueError");
var uploadData=require("./uploadData");

app.set("views",__dirname);
app.set("view engine","jade");
app.use(express.static(__dirname));
app.use("/get",getData);
app.use("/set",setData);
app.use("/upload",uploadData);
app.use("/*",issueError);

var PORT = process.env.PORT || 8080;
app.listen(PORT);