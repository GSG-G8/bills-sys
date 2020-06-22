const express = require('express');

const router = express.Router();

const { getBills } = require('./controller/bills/getBills');

router.get('/bills', getBills);
module.exports = router;
