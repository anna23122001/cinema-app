const Router = require('express');

const directorController = require('../controllers/directorController');

const router = new Router();

router
    .route('/')
    .post(directorController.createDirector)
    .get(directorController.getDirectors)
    .put(directorController.updateDirector);

router
    .route('/:directorId')
    .get(directorController.getDirectorById)
    .delete(directorController.deleteDirector)



module.exports = router;