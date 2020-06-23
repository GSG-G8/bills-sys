const router = require('express').Router();

const { loginValidation, checkUserEmail, signIn } = require('./controller');
const { protectedRoute } = require('./middleware/protectedRoute');

router.post('/login', loginValidation, checkUserEmail, signIn);

router.use(protectedRoute);
router.get('/private', (req, res) => {
  res.send('Hellllo from Private path');
});

module.exports = router;
