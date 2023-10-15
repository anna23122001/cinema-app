const Router = require('express');

const actorRouters = require('./actorRouters');
const directorRouters = require('./directorRouters');
const movieRouters = require('./movieRouters');
const studioRouters = require('./studioRouters');
const nationalRouters = require('./natRouters')
const locationRouters = require('./locationRouters')
const genreRouters = require('./genreRouters')

const router = new Router();

router.use('/actors', actorRouters)
router.use('/directors', directorRouters)
router.use('/movies', movieRouters)
router.use('/studios', studioRouters)
router.use('/nationalities', nationalRouters)
router.use('/locations', locationRouters)
router.use('/genres', genreRouters)

module.exports = router;