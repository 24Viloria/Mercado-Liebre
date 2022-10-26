const express = require('express');

const app = express();

const path = require('path');

app.use(express.static('public'));

app.listen(process.env.PORT || 3001, () => console.log('Servidor Corriendo'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve('./views/login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve('./views/register.html'));
});