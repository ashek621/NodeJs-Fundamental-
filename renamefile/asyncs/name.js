var http=require('http');
var fs=require('fs');

var Server=http.createServer(function (req,res){

    if(req.url=="/"){

     fs.rename('demo.txt', 'demonew.txt',function (error) {

            if (error) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('File Rename Fail');
                res.end();
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('File Rename Success');
                res.end();
            }
        })
        }
    })


Server.listen('4050');
console.log("Server Run Success")