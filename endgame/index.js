const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'html');

app.use(express.static('public'));

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
})

app.get('/blackjack', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server is running..\nhttp://localhost:3000/register');
});