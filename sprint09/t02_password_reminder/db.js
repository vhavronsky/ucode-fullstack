const config = require('./config.json'); 
const bcrypt = require('bcryptjs');
const User = require('./models/user');
const fs = require('fs');
let user = new User();

exports.register = async (req, res) => {
    if(req.method === 'GET') {
        res.send(render('register'));
    } else {
        console.log(req.body);
        // Валидация
        valid = await validate(req.body);
        //Создание
        console.log(valid);
        if(valid.status) {
            //создание пользователя
            let hashedPassword = await bcrypt.hash(req.body.password, 8)
            user.save({
                login: req.body.login,
                password: hashedPassword,
                full_name: req.body.full_name,
                email: req.body.email            
            });
            
            if(user) {
                if(bcrypt.compare(req.body.password, req.body.confirmPass)){
                res.send(render('registerDone', {text: `<div class="container mt-4"><h4 class="alert alert-danger mt-4">Зарегестрирован</h4></div>`}));
                }
            }   
        } else {
            // res.send(render(1))
            res.send(render('register', {text: `<div class="container mt-4"><h4 class="alert alert-danger mt-4">${valid.error}</h4></div>`}))
            // ошибкa
        }
    }
}

exports.home = async (req, res) => {
    if(req.session.user){
       console.log(req.session.user);
        res.send(render('loginDone', {text: `Ваш статус пользователя:${req.session.user.status}</br>`}))
    }else{
        res.redirect('/login')
    }
}

let sess;
exports.login = async (req, res) => {  
    sess = req.session;
    if(req.method === 'GET'){
        if(sess.user){
            res.redirect('/user/home')
        }else{
            res.send(render('login'));
        }     
    }else{
        if(sess.user){
            res.redirect('/user/home/');
        }else{
            let result = await user.getList({login: req.body.login});
            console.log('second------' + sess.user);
            if(result.length > 0 && await bcrypt.compare(req.body.password, result[0].password)){
                sess.user = result[0];
                res.redirect('/user/home');
            }else{
                res.send(render('login', {text: `<div class="container mt-4"><h4 class="alert alert-danger mt-4">Password and login not valid, please change it!</h4></div>`}))
            }
        }           
    }
}
exports.logout = async (req, res) => {
    req.session.destroy(err => {
        if(err){
            return console.log(err);
        }
        res.redirect('/login');
    })
}


async function validate(data) {
    let user = new User();
    let status = true;
    let error = '';
    let result = await user.getList({login: data.login});
    if(result.length > 0) {
        status = false;
        error += "Login already used, please change it! ";
 
    };
    let result1 = await user.getList({email: data.email});
    if(result1.length > 0) {
        status = false;
        error += "Email already used, please change it! ";
    };

    return {status: !(result.length + result1.length), error: error};
}   


function render(file, insert = {}) {
    try {
        let data = fs.readFileSync(__dirname + `/${config.db.view}/${file}.html`, 'utf-8');
        for(let key in insert) {
            data = data.replaceAll(`{#${key.toUpperCase()}#}`, insert[key]);
        }
        while (data.indexOf("{#") > 0) {
            data = data.replaceAll(data.slice(data.indexOf("{#"), data.indexOf("#}") + 2), "");
        }
        return data;
    } catch (err) {
        console.error(err);
    }
    return false;
}