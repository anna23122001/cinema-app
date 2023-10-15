const Router = require('express');

const nationalControllers = require('../controllers/natController')

const router = new Router();

router
    .route('/')
    .post(nationalControllers.createNat)
    .get(nationalControllers.getNat)
    .put(nationalControllers.updateNat);

router
    .route('/:nationalId')
    .get(nationalControllers.getNatById)
    .delete(nationalControllers.deleteNat)

module.exports = router;