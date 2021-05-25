const express = require("express"); // incorporate express to our file

const app = express(); // function that represent express module, we bind that to word app

// defines what should happen when someone make request to home "/" route
// call back function tells server what to do
app.get("/", function(request,response){ // req, res
	//console.log(request);
	//response.send("Hello");
	response.send("<h1>Hello World</h1>");
});

app.listen(3000, function(){
	console.log("Server started on port 3000");// adding call back function which runs once app starts listening
}); // this tells app to listen on a specific port for any HTTP requests that got sent to our server

// port is a channel that we've tuned our server to