const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const router = require('./router');

const app = express();

app.use(compression());
app.disable('x-powered-by');
app.set('port', process.env.PORT || 5000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/', router);
module.exports = app;
