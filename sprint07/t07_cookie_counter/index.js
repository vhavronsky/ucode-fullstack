// npm i express
// npm i cookie-session
// node index.js
// http://127.0.0.1:3000

const express = require('express');
const cookieSession = require('cookie-session');

const app = express();
const port = 3000;
const host = "127.0.0.1";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('trust proxy', 1)

app.use(cookieSession({
  name: 'session',
  keys: ["key1", "key2"],
  maxAge: 60000
}))

app.get('/', function (req, res, next) {
  req.session.views = (req.session.views || 0) + 1
  res.end(`
  <h1>Cookie counter</h1>
  <p>This page was loaded ${req.session.views} time(s) in last minute`)
})

app.listen(port, host, () => {
    console.log(
      `App Started on PORT ${
        3000
      } \n http://${host}:${port} \n Click Ctrl + C for stop server`
    );
});