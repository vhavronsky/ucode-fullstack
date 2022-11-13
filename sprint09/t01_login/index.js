const config = require("./config.json");
const mysql = require("mysql2");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require('express-session');

const userRouter = express.Router();
const controller = require("./db");

const app = express();
const port = 3000;
const host = "127.0.0.1";

const publicDirectory = path.join(__dirname, "/public");
app.use(session({secret: 'hsjhjgkdfjgksj', saveUninitialized: true, resave: true, user: {}}));
app.use(express.static(publicDirectory));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cookieParser());

userRouter.use("/registration", controller.register);
userRouter.use('/home', controller.home);  
app.use('/login', controller.login);
app.use('/logout', controller.logout);
app.use("/user", userRouter);
// app.use('/user', userRouter);

app.listen(port, host, () => {
  console.log(
    `App Started on PORT ${port} \n http://${host}:${port} \n Click Ctrl + C for stop server`
  );
});