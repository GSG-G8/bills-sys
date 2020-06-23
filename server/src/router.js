const router = require('express').Router();
const { protectedRoute } = require('./middleware/protectedRoute');
const {
  clientError,
  serverError,
  getTypes,
  getBills,
} = require('./controller');
const { login } = require('./controller');

router.post('/login', login);
router.get('/types', getTypes);
router.get('/bills/me', protectedRoute, getBills);

router.use(clientError);
router.use(serverError);

module.exports = router;
