

//
// Start http server and bind the socket.io service
//
var fs = require("fs"),
app = require("http").createServer(handler); // handler defined below
//io = require("socket.io").listen(app);

theport = process.env.PORT || 2000;
app.listen(theport);
console.log ("http server on port: " + theport);

function handler (req, res) {
  fs.readFile(__dirname + "/index.html",
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end("Error loading index.html");
    }
    res.writeHead(200);
    res.end(data);
  });
}