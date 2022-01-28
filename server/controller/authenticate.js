const connect = require('../');

const getUsers = async (req, res) => {
  try{
    req.session.isAuth = true;
    res.send('Hello World')
  } catch (error) {

  } finally {

  }
}

const login = async (req, res) => {

}

const signup = async (req, res) => {
  console.log(req.body)
  const { username, password } = req.body;
  res.send('exists');
}

module.exports = {
  getUsers,
  login,
  signup,
}