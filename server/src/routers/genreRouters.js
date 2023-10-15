const Router = require('express');

const genreControllers = require('../controllers/genreController')
const { validateGenre } = require('../middleware/validate.mw')

const router = new Router();

router
    .route('/')
    .post(validateGenre, genreControllers.createGenre)
    .get(genreControllers.getGenres)
    .put(genreControllers.updateGenre);

router
    .route('/:genreId')
    .get(genreControllers.getGenreById)
    .delete(genreControllers.deleteGenre)

module.exports = router;