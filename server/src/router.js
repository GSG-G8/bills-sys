const express = require('express');

const router = express.Router();
const getTypes = require('./controller/types/getTypes');

router.get('/types', getTypes);
module.exports = router;
