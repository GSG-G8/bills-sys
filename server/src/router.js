const router = require('express').Router();
const {
  clientError,
  serverError,
  getTypes,
  getBills,
  login,
} = require('./controller');
const { protectedRoute } = require('./middleware');

router.post('/login', login);
router.get('/types', getTypes);
router.get('/bills/me', protectedRoute, getBills);

router.use(clientError);
router.use(serverError);

module.exports = router;
