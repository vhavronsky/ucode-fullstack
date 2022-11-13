// npm i express
// node index.js
// http://127.0.0.1:3000

'use strict'

const express = require('express');
const app = express();
const fs = require('fs'); // Файлы
const path = require('path'); // Пути
const File = require('./File');
const FileList = require('./FileList');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/js', express.static(__dirname + '/'));

app.get('/', function(req, res){
   res.sendFile(__dirname + "/index.html");
});

app.post('/', function(req, res){
    let file = new File(req.body.filename);
    file.write(req.body.content);
    res.redirect('/');
});

app.get('/list', function(req, res){
    let fileList = new FileList();
    res.json({html: fileList.getHTMLList()});
});
app.get('/show', function(req, res){
    console.log(req.query.file);
    let file = new File(req.query.file);
    res.json({content: file.read()});
});
app.get('/delete', function(req, res){
    console.log(req.query.file);
    let file = new File(req.query.file);
    file.delete();
    res.redirect('/');
});


app.listen(3000,"127.0.0.1",function(){
    console.log("Open http://127.0.0.1:3000/ \n Click Ctrl+C for stop server");
});

/*
 * Sprint 07
 * Task name: Files
*/


let file = new File('example_file.txt');
file.write('Some text.');
const content = file.read();
console.log(content);

const fileList = new FileList();
console.log(fileList.getList());
console.log(fileList.hasFiles());
console.log(fileList.getHTMLList());

file.delete();
console.log(fileList.getList());