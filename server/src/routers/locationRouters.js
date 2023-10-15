const Router = require('express');

const locationControllers = require('../controllers/locationController')

const router = new Router();

router
    .route('/')
    .post(locationControllers.createLocation)
    .get(locationControllers.getLocation)
    .put(locationControllers.updateLocation);

router
    .route('/:locationId')
    .get(locationControllers.getLocationById)
    .delete(locationControllers.deleteLocation)

module.exports = router;