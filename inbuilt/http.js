let http = require('http');
let server = http.createServer(function(req,res){
    res.write('<h1>Hii from nodejs server </h1>');  
    res.end()
})

server.listen(4500)