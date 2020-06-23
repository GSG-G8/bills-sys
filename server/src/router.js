const router = require('express').Router();

const { login } = require('./controller');
const { protectedRoute } = require('./middleware/protectedRoute');

router.post('/login', login);

router.use(protectedRoute);
router.get('/private', (req, res) => {
  res.send('Hellllo from Private path');
});

module.exports = router;
