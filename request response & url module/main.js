//first hello world node js programe:

// var http=require('http');
//
// var server=http.createServer(function (req,res){
//
//     res.end("Hello World")
//
// })
//
// server.listen(5050);
// console.log("server run success");

//Request Response Model in Node Js:
//
// var http=require('http');
//
// var server=http.createServer(function (req,res){
//
//    if(req.url == "/"){
//          res.writeHead(200,{'Content-Type':'text/html'})
//        res.write('<h1>THis is Home Page</h1>')
//        res.end();
//    }
//
//    else if(req.url == "/about"){
//            res.writeHead(200,{'Content-Type':'text/html'})
//            res.write('<h1>THis is About Page</h1>')
//            res.end();
//        }
//
//        else if(req.url == "/contact"){
//                res.writeHead(200,{'Content-Type':'text/html'})
//                res.write('<h1>THis is Contact Page</h1>')
//                res.end();
//            }
//
// })
//
// server.listen(5050);
// console.log("server run success");


// Node.js URL Module:-

// var http=require('http');
// var URL=require('url');
//
// var server=http.createServer(function (req,res){
//
// var myUrl="http://rabbil.com/blog.html?year=2020&monthjuly";
//
// myUrlobj=URL.parse(myUrl,true);
//
// var myHostname=myUrlobj.host;
// var myPathname=myUrlobj.pathname;
// var mySearchname=myUrlobj.search;
//
// res.writeHead(200,{'Content-Type':'text/html'});
//
//     res.write(myPathname);
// res.end();
//
// })
//
// server.listen(5050);
// console.log("server run success");

