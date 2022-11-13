const config = require("./config.json");
const Hero = require("./models/hero");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const port = 3000;
const host = "127.0.0.1";


app.get('/', (req, res) => {
  res.send(getIndex());
})


app.get('/find', async (req, res) => {
  const hero = new Hero();
  res.json((await hero.find(1)).data)
})

app.get('/delete', async (req, res) => {
  const hero = new Hero();
  res.json(await hero.save({id: 18, name: 'qqq', description: 'ddd', race: 'human', class_role: 2}));
})

app.get('/save', async (req, res) => {
  const hero = new Hero();
  res.json((await hero.find(12)).delete())
})
app.get('/all', async (req, res) => {
  const hero = new Hero();
  res.json((await hero.getAll()).data);
})

app.listen(port, host, () => {
  console.log(
    `App Started on PORT ${3000} \n http://${host}:${port} \n Click Ctrl + C for stop server`
  );
});

function getIndex(){
  let result = ``;
  result += `
    <a href="/find">find(id)</a>
    <a href="/delete">delete()</a>
    <a href="/save">save()</a>
    <a href="/all">all()</a>
  `;
  return result
}