// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/website1.html");
});
app.get("/website1.html", function(request, response) {
  response.sendFile(__dirname + "/views/website1.html");
});
app.get("/website2.html", function(request, response) {
  response.sendFile(__dirname + "/views/website2.html");
});
app.get("/website3.html", function(request, response) {
  response.sendFile(__dirname + "/views/website3.html");
});
app.get("/website4.html", function(request, response) {
  response.sendFile(__dirname + "/views/website4.html");
});
app.get("/vidcode.html", function(request, response) {
  response.sendFile(__dirname + "/views/vidcode.html");
});
app.get("/vidcode2.html", function(request, response) {
  response.sendFile(__dirname + "/views/vidcode2.html");
});
// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
