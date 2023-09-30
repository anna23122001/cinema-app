
const fs = require('fs');
const path = require('path')
const express = require('express');

const app = express();

const actorControllers = require('./controllers/actorController')

// app.use(express.static('./public'));
// app.use(express.static(path.join(__dirname, '..', 'public')));

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

// Actors
app.get('/actors', actorControllers.getActors)
app.get('/actors/:actorId', actorControllers.getActorById)
app.post('/actors', () => { })
app.put('/actors/id', () => { })
app.delete('/actors/id', () => { })
// Directors
app.get('/directors', actorControllers.)
app.get('/directors/:directorId', actorControllers.)
app.post('/directors', () => { })
app.put('/directors/id', () => { })
app.delete('/directors/id', () => { })
// Studios
app.get('/studios', actorControllers.)
app.get('/studios/:studioId', actorControllers.)
app.post('/studios', () => { })
app.put('/studios/id', () => { })
app.delete('/studios/id', () => { })
// Films
app.get('/films', actorControllers.)
app.get('/films/:filmId', actorControllers.)
app.post('/films', () => { })
app.put('/films/id', () => { })
app.delete('/films/id', () => { })

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

// app.get('/images/*', (req, res) => {
//     const url = req.url;
//     fs.readFile(`./public${url}`, (err, data) => {
//         if (err) {
//             res.statusCode = 404;
//             throw err;
//         } 
//         res.setHeader('Content-Type', 'image/jpeg');
//         res.write(data);
//         res.end();
//     })
// })

module.exports = app;