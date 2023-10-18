const Router = require('express');

const genreControllers = require('../controllers/genreController')
const { validate} = require('../middleware')

const router = new Router();

router
    .route('/')
    .post(validate.validateGenre, genreControllers.createGenre)
    .get(genreControllers.getGenres)
    .put(genreControllers.updateGenre);

router
    .route('/:genreId')
    .get(genreControllers.getGenreById)
    .delete(genreControllers.deleteGenre)

module.exports = router;