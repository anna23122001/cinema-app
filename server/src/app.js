
const fs = require('fs');
const path = require('path')
const express = require('express');

const app = express();

const actorControllers = require('./controllers/actorController')
const directorControllers = require('./controllers/directorController')
const studioControllers = require('./controllers/studioController')
const movieControllers = require('./controllers/movieController')

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
app.get('/directors', directorControllers.getDirectors)
app.get('/directors/:directorId', directorControllers.getDirectorById)
app.post('/directors', () => { })
app.put('/directors/id', () => { })
app.delete('/directors/id', () => { })
// Studios
app.get('/studios', studioControllers.getStudios)
app.get('/studios/:studioId', studioControllers.getStudioById)
app.post('/studios', () => { })
app.put('/studios/id', () => { })
app.delete('/studios/id', () => { })
// // Films
app.get('/movies', movieControllers.getMovies)
app.get('/movies/:movieId', movieControllers.getMovieById)
app.post('/movies', () => { })
app.put('/movies/id', () => { })
app.delete('/movies/id', () => { })

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