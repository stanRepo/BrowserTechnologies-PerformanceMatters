var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var { index, about, offline, detail} = require('../controller/indexController');

router.get('/', index)
router.get('/about', about)
router.get('/=:id', detail)
router.get('/offline', offline)

module.exports = router;