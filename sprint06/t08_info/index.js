// npm init -y
// npm install express
const express = require("express"),
  path = require("path"),
  os = require("os"),
  app = express(),
  port = 3000;  


app.get("/", (req, res) => {
  // 1
  const filename = path.basename(__filename);
  console.log("A name of file of the executed script: " + filename);

  // 2
  process.argv.forEach(function (val, index) {
    console.log("Arguments passed to the script: " + index + ": " + val);
  });

  // 3
  var ip = req.connection.remoteAddress;
  console.log("IP address of the server: " + ip);

  // 4
  console.log("A name of host that invokes the current script: " + os.hostname());

  // 5
  console.log("A name and a version of the information protocol: " + req.protocol);

  // 6
  console.log("a query method: " + req.headers);

  // 7
  console.log("User-Agent information: " + req.headers["user-agent"]);

  // 8
  console.log("IP address of the client: " + req.ip);

  // 9
  let str = "A list of parameters passed by URL: " + JSON.stringify(req.headers);
  console.log(str);


  res.end("Hello");
});

app.listen(3000, "127.0.0.1", () => {
  console.log("http://127.0.0.1:3000 \n Click Ctrl + C for stop server");
});