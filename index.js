const express = require('express');
const http = require('http');

const PORT = 5000; 
const app = express();
const server = http.createServer(app);

/*
##### ROUTES
*/
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
});

app.get('/home', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
});

app.get('/about', (req, res) => {
    res.sendFile(`${__dirname}/pages/about.html`)
});

app.get('/contact', (req, res) => {
    res.sendFile(`${__dirname}/pages/contact.html`)
});



server.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
});