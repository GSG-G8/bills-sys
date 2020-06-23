const router = require('express').Router();

const {
  clientError,
  serverError,
  getTypes,
  getStats,
  login,
} = require('./controller');

router.get('/bills/:userId/stats', getStats);

router.post('/login', login);
router.get('/types', getTypes);

router.use(clientError);
router.use(serverError);

module.exports = router;
