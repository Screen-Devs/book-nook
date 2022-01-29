module.exports = isAuth = (req, res, next) => {
  if (req.session.isAuth) {
    next()
  } else {
    res.send({ isAuthenticated: false })
  }
};
