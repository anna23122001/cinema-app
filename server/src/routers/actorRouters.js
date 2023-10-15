const Router = require('express');

const actorControllers = require('../controllers/actorController')

const router = new Router();

router
    .route('/')
    .post(actorControllers.createActor)
    .get(actorControllers.getActors)
    .put(actorControllers.updateActor);

router
    .route('/:directorId')
    .get(actorControllers.getActorById)
    .delete(actorControllers.deleteActor)


module.exports = router;