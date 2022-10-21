var http=require('http');
var fs=require('fs');

var Server=http.createServer(function (req,res){

    if(req.url=="/"){

        fs.exists('vir.txt',function (result) {
            if(result){
                res.end("File Ase")
            }
            else {
                res.end("File Nai o Vai")
            }

        })
    }
})


Server.listen('6050');
console.log("Server Run Success")

