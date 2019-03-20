var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var { index, about, aboutPost, notFound} = require('../controller/indexController');

router.get('/', index)
router.get('/about', about)

router.post('/about', aboutPost)


module.exports = router;