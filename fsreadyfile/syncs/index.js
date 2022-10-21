var http=require('http');
var fs=require('fs');

var Server=http.createServer(function (req,res){

    if(req.url=="/"){
      let mydata=fs.readFileSync('Home.html');

            res.writeHead(200,{'Content-Type' : 'text/html'});
            res.write(mydata);
            res.end();
        }





});

Server.listen('5050')
console.log("Server Run Success")