const router = require('express').Router();

const {
  clientError,
  serverError,
  getTypes,
  getBills,
  login,
  getStats,
} = require('./controller');
const { protectedRoute } = require('./middleware');

router.get('/bills/:userId/stats', getStats); // we could make this bills/me/stats

router.post('/login', login);
router.get('/types', getTypes);
router.get('/bills/me', protectedRoute, getBills);

router.use(clientError);
router.use(serverError);

module.exports = router;
