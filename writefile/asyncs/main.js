var http=require('http');
var fs=require('fs');

var Server=http.createServer(function (req,res){

    if(req.url=="/"){

        fs.writeFile('demo.txt', 'Hello People', function(error){

            if (error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write('File Write FAil');
                res.end();
            }
            else {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write('File Write Success');
                res.end();
            }
        })
    }
})
Server.listen('5050');
console.log("Server Run Success")