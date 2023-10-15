const fs = require('fs');
const path = require('path')
const express = require('express');

const app = express();
app.use(express.json());

const router = require('./routers')

app.use(express.static(path.resolve('public')));

app.get('/', (req, res) => {
    fs.readFile('./public/index.html', 'utf-8', (err, data) => {
        if (err) {
            res.statusCode = 404;
            throw err;
        }
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.write(data);
        res.end();
    })
});

app.use('/api', router)

app.get('/contact', (req, res) => {
    fs.readFile('./public/contact.html', 'utf-8', (err, data) => {
        if (err) {
            res.statusCode = 404;
            throw err;
        } 
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.write(data);
        res.end();
    })
})


module.exports = app;