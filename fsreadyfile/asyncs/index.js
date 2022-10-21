var http=require('http');
var fs=require('fs');

var Server=http.createServer(function (req,res){

if(req.url=="/"){
    fs.readFile('Home.html',function(error,data){

        res.writeHead(200,{'Content-Type' : 'text/html'});
        res.write(data);
        res.end();
    })


}

});

Server.listen('5050')
console.log("Server Run Success")