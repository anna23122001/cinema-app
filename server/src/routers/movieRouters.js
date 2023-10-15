const Router = require('express');

const movieControllers = require('../controllers/movieController')
const { validateMovie } = require('../middleware/validate.mw')

const router = new Router();

router
    .route('/')
    .post(validateMovie, movieControllers.createMovie)
    .get(movieControllers.getMovies)
    .put(movieControllers.updateMovie);

router
    .route('/:movieId')
    .get(movieControllers.getMovieById)
    .delete(movieControllers.deleteMovie)

module.exports = router;