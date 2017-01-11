var express=require("express");

var router=express.Router();

router.get("/",function(req,res){
    res.end("error 404 - file not found");
})

module.exports=router;