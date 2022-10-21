var http=require('http');
var fs=require('fs');

var Server=http.createServer(function (req,res){

    if(req.url=="/"){

     let result=  fs.existsSync('ashek.txt');

            if (result) {

                res.end("True")
            } else {

                res.end("False");
            }

    }
})


Server.listen('6050');
console.log("Server Run Success")