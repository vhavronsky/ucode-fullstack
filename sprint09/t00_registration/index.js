const config = require("./config.json");
const mysql = require("mysql2");
const express = require("express");
const path = require('path');
const cookieParser = require('cookie-parser');

const userRouter = express.Router();
const controller = require('./db');

const app = express();
const port = 3000;
const host = "127.0.0.1";

const publicDirectory = path.join(__dirname, '/public');
app.use(express.static(publicDirectory));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false}));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cookieParser());


userRouter.use('/registration', controller.register);

app.use('/user', userRouter);


// app.use('/', require('./model'));

// app.use('/auth', require('./model'));

app.listen(port, host, () => {
    console.log(
      `App Started on PORT ${port} \n http://${host}:${port} \n Click Ctrl + C for stop server`
    );
  });