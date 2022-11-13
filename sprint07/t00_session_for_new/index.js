// npm i express
// http://127.0.0.1:3000
const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'ssshhhhh', 
    saveUninitialized: true, 
    resave: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const host = '127.0.0.1';
const port = 3000;

var sess;
app.get('/', (req,res) => {
    sess = req.session;
    if(sess.name){
        return res.redirect('admin');
    }
    res.sendFile(__dirname + '/index.html')
});

app.post('/login', (req, res) => {
    let resultExp = 1;
    let resultPur = 1;
    sess = req.session;
    console.log(req.body)
    for(let key in req.body) {
        sess[key] = req.body[key];
        if(key.includes('pw_')){
            sess.expirience = resultExp++
        }else{
            sess.expirience = resultExp - 1
        }
        if(key.includes('pub_')){
            sess.purpose = resultPur++
        }else{
            sess.purpose = resultPur - 1
        }
    }

    res.redirect("/admin");
});

app.get('/admin', (req, res) => {
    sess = req.session;
    if (sess.name && sess.alias && sess.age && sess.age && sess.text && sess.photo){
        res.write(`<h1>Session for new</h1>
        <pre>
        name:${sess.name}
        alias:${sess.alias}
        age:${sess.age}
        description:${sess.text}
        photo:${sess.photo}
        expirience:${sess.expirience}
        level:${sess.volume}
        level:${sess.purpose}</pre>`);
        res.end('<button><a href='+'/logout'+'>Forget</a></button>');
    } else{
        res.write('<h1>Please login first.</h1>');
        res.end('<a href='+'/'+'>Login</a>');
    }
})

app.get('/logout',(req,res) => {
    req.session.destroy((err) => {
        if(err) console.log(err);
        
        res.redirect('/');
    });

});

app.listen(process.env.PORT || 3000, host, () => {
    console.log(`App Started on PORT ${process.env.PORT || 3000} \n http://${host}:${port} \n Click Ctrl + C for stop server`);
});