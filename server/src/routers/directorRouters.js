const Router = require('express');

const directorController = require('../controllers/directorController');
const {validatePerson} = require('../middleware/validate.mw')

const router = new Router();

router
    .route('/')
    .post(validatePerson, directorController.createDirector)
    .get(directorController.getDirectors)
    .put(directorController.updateDirector);

router
    .route('/:directorId')
    .get(directorController.getDirectorById)
    .delete(directorController.deleteDirector)



module.exports = router;