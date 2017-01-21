var express = require("express");
var router=express.Router();
var url=require("url");
var fs = require('fs');
var stream = require("stream");

var Storage = require('@google-cloud/storage');

var storage = Storage();

var bucket = storage.bucket('lawdata-153917.appspot.com');


router.get("/",function(req,res){
    res.setHeader("Content-Type","text/html; charset=windows-1255");
    var url_parts=url.parse(req.url,true).query;
//     read file from bucket 
    var oFile=bucket.file(url_parts.fNm);
    oFile.exists(function(err,bExists){
        if (bExists){
          var sDoc="";
          oFile.createReadStream()
            .on('error', function(err) {})
            .on('data', function(chunk) {
                sDoc+=chunk.toString();
              // Server connected and responded with the specified status and headers.
            })
            .on('end', function() {
              // The file is fully downloaded.
              res.end (sDoc);
            })
        }
        else{
          res.end ("file - "+url_parts.fNm+" doesn't exits");
        }
    });



    /* write file into bucket - method 1*/
 /*
  var s = new stream.Readable;
  s.push('lalalia');
  s.push(null);
  var oFile=bucket.file("shay3.txt");
  s.pipe(oFile.createWriteStream());
  console.log ("did it1");
  */
  /* write file into the bucket - method 2 */
/*  
  var oFile=bucket.file("shay5.txt");
  var sData="trying it lalala";
  oFile.save(sData, function(err) {
  if (!err) {
    console.log ("saved file111");
    var oMetadata = {contentType:"text/html"};
    oFile.setMetadata(oMetadata);
  
    // File written successfully.
  }
});
  */
  
//  res.end ("did it4"); 

})
module.exports=router;