const router = require('express').Router();

const { login } = require('./controller');
const { protectedRoute } = require('./middleware/protectedRoute');
const { clientError, serverError, getTypes } = require('./controller');

router.post('/login', login);
router.get('/types', getTypes);

router.use(serverError);

router.use(protectedRoute);

router.get('/private', (req, res) => {
  res.send('Hellllo from Private path');
});

router.use(clientError);

module.exports = router;
