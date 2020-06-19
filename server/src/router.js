const router = require('express').Router();
const { logout } = require('./controllers');
require('./models');

router.get('/logout', logout);

module.exports = router;
