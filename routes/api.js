var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('api');
});

router.get('/aaa', function(req, res, next) {
    res.send({'name':'zhangsan','email':'edaa'});
});

module.exports = router;