// npm i express
// npm i ejs
// node index.js
// http://127.0.0.1:3000/

const express = require('express'),
      normal = require('./normal-router'),
      quantum = require('./quantum-router');

const app = express(),
      port = 3000

      app.set('view engine', 'ejs');
      app.get('/', function(req, res){
          res.render('index')
      });
      app.get('/normal', function(req, res){
          res.render('normal', {normal: normal.calculateTime()})
      });
      app.get('/quantum', function(req, res){
          res.render('quantum', {quantum: quantum.calculateTime()})
      })
      app.listen(3000, '127.0.0.1' ,function(){
         console.log('http://127.0.0.1:3000 \n Click Ctrl + C for stop server' )
      });