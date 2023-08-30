var fs=require('fs');
var http=require('http');

var server=http.createServer(function (req,res){

    if(req.url=="/"){
       let data=fs.readFileSync('home.html','UTF-8');
       res.end(data);
    }
    else if(req.url=="/contact"){
        let data=fs.readFileSync('contact.html','UTF-8');
       res.end(data);


    }else if(req.url=="/about"){
        let data=fs.readFileSync('about.html','UTF-8');
       res.end(data);


    }


});
server.listen(3000);
console.log("server run success");