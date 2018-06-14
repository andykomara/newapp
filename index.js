var http = require('http');

http.createServer(function(request,response){
    console.log(" running");
    response.write("node");
    response.end();
}).listen(4000);


// var temp = require('nodeapp-121618')
// console.log(temp.appname)
// temp.home();
// temp.lib.global();