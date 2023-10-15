const Router = require('express');

const actorRouters = require('./actorRouters');
const directorRouters = require('./directorRouters');
const movieRouters = require('./movieRouters');

const router = new Router();

router.use('/actors', actorRouters)
router.use('/directors', directorRouters)
router.use('/movies', movieRouters)

module.exports = router;