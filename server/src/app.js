require('env2')('.env');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const { join } = require('path');
const router = require('./router');

const app = express();

app.use(cookieParser());
app.use(compression());
app.disable('x-powered-by');
app.set('port', process.env.PORT || 5000);

// eslint-disable-next-line import/no-extraneous-dependencies, global-require
if (process.env.NODE_ENV === 'development') app.use(require('morgan')('dev'));

const middlewares = [express.json(), cookieParser()];
app.use(middlewares);

app.use('/api/v1/', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'client', 'build', 'index.html'));
  });
}

module.exports = app;
