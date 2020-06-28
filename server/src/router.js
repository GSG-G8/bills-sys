const router = require('express').Router();

const {
  clientError,
  serverError,
  getTypes,
  login,
  logout,
  getBills,
  getStats,
} = require('./controller');

const { protectedRoute } = require('./middleware');

router.post('/login', login);
router.get('/types', getTypes);
router.get('/logout', logout);
router.get('/bills/:userId/stats', getStats); // we could make this bills/me/stats
router.get('/bills/me', protectedRoute, getBills);
router.get('/auth', protectedRoute, (req, res) => {
  res.json({ statusCode: 200, user: req.user });
});

router.use(clientError);
router.use(serverError);

module.exports = router;
