const http = require('http'),
      path = require('path'),
      fs = require('fs');


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");
    let readStream = fs.createReadStream(__dirname + "/index.html");
    readStream.pipe(res);
  });


server.listen(3000, () => {
    console.log('server is running here:\nhttp://localhost:3000');
})



