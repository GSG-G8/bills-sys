const router = require('express').Router();

const {
  clientError,
  serverError,
  getTypes,
  login,
  logout,
} = require('./controller');

router.post('/login', login);
router.get('/types', getTypes);
router.get('/logout', logout);

router.use(clientError);
router.use(serverError);

module.exports = router;
