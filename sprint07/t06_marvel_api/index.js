// npm i express
// node index.js
// http://127.0.0.1:3000

const express = require('express');
const app = express();
const fetch = require('node-fetch');
const crypto = require('crypto');
const port = 3000;
const host = '127.0.0.1'

const pubKey = '35cc9e9f50d0ed619352756309899882';
const privKey = 'e7d240bc7d4fe25246e0adcb969ce2fb4a649809';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/js', express.static(__dirname + '/'));

app.get('/', async function(request, response){
    response.sendFile(__dirname + '/index.html');
});

app.get('/show', async function(request, response){
    let now = Date.now();
    let ccc = crypto.createHash('md5').update(now + privKey + pubKey).digest("hex");
    response.json(await fetch(`http://gateway.marvel.com/v1/public/comics?apikey=${pubKey}&hash=${ccc}&ts=` + now)
    .then(res => res.json()));
});

app.listen(port, host, () => {
    console.log(
      `App Started on PORT ${port} \n http://${host}:${port} \n Click Ctrl + C for stop server`
    );
});