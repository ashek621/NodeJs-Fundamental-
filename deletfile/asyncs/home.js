var http=require('http');
var fs=require('fs');

var Server=http.createServer(function (req,res){

    if(req.url=="/"){

        fs.unlink('ashek.txt',function (error){

            if (error) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('File DElete FAil');
                res.end();
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('File Delete Success');
                res.end();
            }
        })
    }
})


Server.listen('5050');
console.log("Server Run Success")



