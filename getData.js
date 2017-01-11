var express = require("express");
var router=express.Router();
var url=require("url");

router.get("/",function(req,res){
    res.setHeader("Content-Type","text/html; charset=windows-1255");
    var url_parts=url.parse(req.url,true);

    res.send ("i think it's ok - " +  (url_parts.query.docid ? url_parts.query.docid : "no value"));
})

module.exports=router;