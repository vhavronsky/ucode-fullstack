// npm i express
// npm i csv-parser
/*
/ inside folder 'uploads' create a file '1b64535bd5bb583e4b802d266eaf76d5'
/ insert this in file:
ID,Name,Alignment,Gender,EyeColor,Race,HairColor,Publisher,SkinColor,Height,Weight
0,A-Bomb,good,Male,yellow,Human,No Hair,Marvel Comics,-,203,441
1,Abe Sapien,good,Male,blue,Icthyo Sapien,No Hair,Dark Horse Comics,blue,191,65
2,Abin Sur,good,Male,blue,Ungaran,No Hair,DC Comics,red,185,90
3,Abomination,bad,Male,green,Human / Radiation,No Hair,Marvel Comics,-,203,441
*/
// node index.js
// http://127.0.0.1:3000
// upload that file

'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const multer  = require('multer');
const session = require('express-session');
let csvArray = [];
let sess;

const app = express();
const port = 3000;
const host = '127.0.0.1'


app.use(session({secret: 'hsjhjgkdfjgksj', saveUninitialized: true, resave: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static(__dirname + '/'));
app.use('/js', express.static(__dirname + '/'));
app.use(multer({dest:"uploads"}).single("file"));

app.get('/', (req, res) => {
    res.send(getIndex())
});

app.post('/', (req, res, next) => {
     sess = req.session;
     if(!req.file){
         res.redirect('/')
     }else{
         sess.file = req.file.path;
     let result = '';
     fs.createReadStream(sess.file)
            .pipe(csv())
            .on('data', (data) => csvArray.push(data))
            .on('end', () => {
                result = renderTable(csvArray);
                res.send(getIndex(result))
            })
     }
     
})

app.get('/filter', (req, res) => {
    let result = '';
    fs.createReadStream(sess.file)
          .pipe(csv())
          .on('data', (data) => csvArray.push(data))
          .on('end', () => {
              result = renderTable(csvArray, req.query);
              res.send(getIndex(result));
          })
})

app.listen(port, host, () => {
    console.log(
      `App Started on PORT ${
        3000
      } \n http://${host}:${port} \n Click Ctrl + C for stop server`
    );
  });


function getIndex(insert = false){
      try{
          const data = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
          return (data && insert) ? data.replace('#TEXT#', insert) : data.replace("#TEXT#", '');
      }catch(err){
          console.error(err);
      }
      return false
}

function renderTable(arr, filter = false){
    let map = getFilters(arr);
    let result = '<form action="/filter" id="filters"><table border="1px;"><tr>';
    for(let key in arr[0]){
        result += `<th>${getFilterHtml(key, map, filter ? filter[key] : false)}</th>`;
    }
    result += '</tr>';
    if(filter && Object.keys(filter).length !== 0){
        arr = arr.filter(item => {
            let flag = true;
            for(let key in item){
                if(!(filter[key] === item[key] || filter[key] === 'all-items')){
                    flag = false;
                }
            }
            return flag;
        })
    }
    arr.map(item => {
        result += '<tr>';
        for(let key in item){
            result += `<td>${item[key]}</td>`;
        }
        result += '</tr>'
    });
    result += '</table><button type="submit" id="submit"></button></form>';
    return result;
}

function getFilterHtml(title, map, filter){
    let result = `<select name="${title}">${title}`;
    result += `<option value="all-items" ${!filter || filter === 'all-items' ? 'selected' : ''}><b>${title} (all)</b></option>`;
    map.get(title).map(item => {
        result += `<option value="${item}"  ${filter === item ? 'selected' : ''}>${item}</option>`;
    });
    result += `</select>`
    return result
}

function getFilters(arr){
    let map = new Map();
    for(let key in arr[0]){
        map.set(key, [...new Set(arr.map(item => {return item[key]}))].sort());
    }
    return map;
}