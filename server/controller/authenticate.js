const { insertUser } = require('../../database/models/user');

const getUsers = async (req, res) => {
  try{
    req.session.isAuth = true;
    res.send('Hello World')
  } catch (error) {

  } finally {

  }
}

const login = async (req, res) => {
  // check login credentials against db
  // get this user's info
}

const signup = async (req, res) => {
  const { username, password } = req.body;
  const dataToInsert = {
    username,
    password,
  };
  const result = await insertUser(dataToInsert);
  console.log(result);
  res.send(result);
}

module.exports = {
  getUsers,
  login,
  signup,
}