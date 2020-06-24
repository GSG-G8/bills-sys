const logout = (req, res) => {
  res.clearCookie('token').json({ message: 'logout successfully' });
};

module.exports = logout;
