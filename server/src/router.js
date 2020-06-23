const express = require('express');

const router = express.Router();

const {
  clientError,
  serverError,
  getTypes,
  getBills,
} = require('./controller');

router.get('/types', getTypes);
router.get('/bills', getBills);

router.use(clientError);
router.use(serverError);

module.exports = router;
