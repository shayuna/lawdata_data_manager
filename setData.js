var express=require("express");
var fs = require('fs');
var busboy = require('connect-busboy');
var url = require('url');
var app=express();
//...
app.use(busboy()); 

var Storage = require('@google-cloud/storage');
var storage = Storage();
var bucket = storage.bucket('shay1970');

app.post('/*', function(req, res) {
    req.pipe(req.busboy);
    var queryData = url.parse(req.url, true).query;
     req.busboy.on('file', function (fieldname, file, filename) {
        var sDoc="";
        file.on('error', function(err) {})
        .on('data', function(chunk) {
            sDoc+=chunk.toString();
            // Server connected and responded with the specified status and headers.
        })
        .on('end', function() {
            // The file is fully downloaded.
            var oFile=bucket.file(queryData.fNm);
            oFile.save(sDoc, function(err) {
                if (!err) {
                    console.log ("saved file - "+queryData.fNm);
                    var oMetadata = {contentType:"text/html"};
                    oFile.setMetadata(oMetadata);
                    res.end("got the upload of file - " + queryData.fNm);
                    // File written successfully.
                }
                else{
                    console.log ("got an error when trying to upload file - "+queryData.fNm);
                }
            });
         })        


//        var oMetadata = {contentType:"text/html"};
  //      oFile.setMetadata(oMetadata);
    //    file.pipe(oFile.createWriteStream());
//        res.end("got the upload of file - " + queryData.fNm);
    });
});
module.exports=app;