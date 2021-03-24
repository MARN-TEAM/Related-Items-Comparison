const controller = require('./controllers');
const router  = require('express').Router();


router.get('/related',controller.related.relatedProd)
router.get('/favorite',controller.favorite.favoriteProd)

module.exports = router