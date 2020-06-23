const router = require('express').Router();

const { login } = require('./controller');
const { clientError, serverError, getTypes } = require('./controller');

router.post('/login', login);
router.get('/types', getTypes);

router.use(clientError);
router.use(serverError);

module.exports = router;
