var http=require('http');
var fs=require('fs');

var Server=http.createServer(function (req,res){

    if(req.url=="/"){

        var error= fs.renameSync('homepage.txt', 'demonew.txt',)
        {

            if (error) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('File Rename FAil');
                res.end();
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('File Rename Success');
                res.end();
            }
        }
    }
})


Server.listen('4050');
console.log("Server Run Success")