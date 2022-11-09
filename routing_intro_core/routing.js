const http = require("http"); //Core built-in module
const fs = require('fs');
const { runInNewContext } = require("vm");


//Create Server
const server = http.createServer(function(req, res){

    //Decision logic to determine which route we want to run
    if(req.url == '/about' && req.method == "GET"){
        res.writeHead(200, {"Content-type": "text/html"});
        fs.readFile("about.html", function(err, data){
            res.write(data);
            res.end();
        });

    }else if(req.url == "/contact" && req.method == "GET"){
        res.writeHead(200, {"Content-type": "text/html"});
        fs.readFile("contact.html", function(err, data){
            res.write(data);
            res.end();
        });
    }else{
        res.writeHead(200, {"Content-type": "text/html"});
        fs.readFile("home.html", function(err, data){
            res.write(data);
            res.end();
        });
    }

}).listen(3000);