// npm i express
// node index.js
// http://127.0.0.1:3000

const express = require('express');
const fs = require('fs');
const path = require('path');
const request = require('request');

const app = express();
const port = 3000;
const host = "127.0.0.1";

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, response) => {
    console.log(req.query)
    console.log(req.query.url)
    if(req.query.url){
        request(req.query.url.includes('http') ? req.query.url : 'http://' + req.query.url, function(error, res, body){
            response.send(getIndex('<hr>url: ' + req.query.url + '<br><hr><pre>' + body.substring(body.indexOf('<body'), body.indexOf('</body') + 7).replaceAll('<', '&lt;').replaceAll('>', '&gt') + '</pre'));
        });
    }else{
        response.send(getIndex('<div id="typeurl">Type an URL...</div>'));
    }
})

app.listen(port, host, () => {
    console.log(
      `App Started on PORT ${port} \n http://${host}:${port} \n Click Ctrl + C for stop server`
    );
  });

  function getIndex(insert = false){
      try { 
        const data = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
        return (data && insert) ? data.replace('#TEXT#', insert) : data.replace('#TEXT#', '');
      } catch(err){
         console.log(err);
      }
      return false
  }