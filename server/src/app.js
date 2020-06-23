require('env2')('.env');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const router = require('./router');

const app = express();

app.use(cookieParser());
app.use(compression());
app.disable('x-powered-by');
app.set('port', process.env.PORT || 5000);

// eslint-disable-next-line import/no-extraneous-dependencies, global-require
if (process.env.NODE_ENV === 'development') app.use(require('morgan')('dev'));

app.use(express.json());
app.use('/api/v1/', router);
module.exports = app;
