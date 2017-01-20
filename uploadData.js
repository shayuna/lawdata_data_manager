var express=require("express");
var router=express.Router();
router.get("/",function(req,res){//    res.end("file not found baby");
    res.render("uploadData");
})
module.exports=router;