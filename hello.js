const http = require('http');
http.createServer(function(request,response) {
    console.log("Server is running")
    response.end("HEllo World");

}).listen(1000);

//.listen(3001);
