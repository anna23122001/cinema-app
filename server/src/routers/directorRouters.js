const Router = require('express');

const directorController = require('../controllers/directorController');
const {validate} = require('../middleware')

const router = new Router();

router
    .route('/')
    .post(validate.validatePerson, directorController.createDirector)
    .get(directorController.getDirectors)
    .put(directorController.updateDirector);

router
    .route('/:directorId')
    .get(directorController.getDirectorById)
    .delete(directorController.deleteDirector)



module.exports = router;