var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var { index, about, aboutPost, notFound, detail} = require('../controller/indexController');

router.get('/', index)
router.get('/about', about)
router.get('/=:id', detail)


router.get('/*', notFound)

router.post('/about', aboutPost)


module.exports = router;