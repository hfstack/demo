const user = require('../controllers/user.js');
var router = require('koa-router')();
user.auth(router);
module.exports = router;
