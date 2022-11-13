const hostname = "127.0.0.1";
const port = "3000";
const http = require("http");
const fs = require("fs");
const path = require('path');

const server = http.createServer(function (req, res) {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile(
        path.join(__dirname, 'index.html'),
        'utf-8', 
        (err, content) => {
          if (err) throw err;
          res.end(content);
        }
    )
  } else if (req.method === "POST") {
    let body = "";
    req.on("data", function (chunk) {
      body += chunk;
    });
    req.on("end", function () {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(body);
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`server started at http://${hostname}:${port}`);
});