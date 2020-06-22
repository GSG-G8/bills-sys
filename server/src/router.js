const router = require('express').Router();

const { loginValidation, checkUserEmail, signIn } = require('./controller');

router.post('/login', loginValidation, checkUserEmail, signIn);

module.exports = router;
