const express = require('express');

const router = express.Router();

const { clientError, serverError, getTypes } = require('./controller');

const getStats = require('./controller/stats/getStats');
// require('./models');

router.get('/bills/:userId/stats', getStats);

router.get('/types', getTypes);

router.use(clientError);
router.use(serverError);

module.exports = router;
