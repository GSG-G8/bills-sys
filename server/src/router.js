const router = require('express').Router();

require('./models');

const { loginValidation, checkUserEmail, signIn } = require('./controller');

router.post('/login', loginValidation, checkUserEmail, signIn);

module.exports = router;
