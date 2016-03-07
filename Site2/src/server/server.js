/**
 * Created by amanjain on 06/03/16 at 11:29 AM.
 * Description :
 */


//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT = 9000;

//We need a function which handles requests and send response
function handleRequest(request, response) {
    response.setHeader("Access-Control-Allow-Origin", "http://localhost:63342");
    console.log('It Works!! Path Hit: ' + request.url);
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function () {
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
