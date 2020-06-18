const clientError = (req, res) => {
  res.status(404).json({ error: 'Page Not Found' });
};

// eslint-disable-next-line no-unused-vars
const serverError = (err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(err);
  if (err.isBoom) {
    // boom error
    const {
      output: { statusCode, payload },
    } = err;
    res.status(statusCode).send(payload);
  } else {
    res.status(err.status).json({ msg: err.msg });
  }
};

module.exports = {
  clientError,
  serverError,
};
