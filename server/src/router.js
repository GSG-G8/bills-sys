const express = require('express');

const router = express.Router();

const { clientError, serverError, getTypes } = require('./controller');

router.get('/types', getTypes);

router.use(clientError);
router.use(serverError);

module.exports = router;
