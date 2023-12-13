let http = require("http");

http.createServer(
    function(request, response){
        response.end("Welcome");
    }
).listen(8181);

console.log("Server online");