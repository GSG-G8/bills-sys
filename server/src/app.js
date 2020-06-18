const express = require('express');
const compression = require('compression');
const router = require('./router');

const app = express();

app.use(compression());
app.disable('x-powerd-by');
app.set('port', process.env.PORT || 5000);

app.use(express.json());
app.use('api/v1/', router);
module.exports = app;
