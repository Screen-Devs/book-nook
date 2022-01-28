const { insertOne } = require('../../database/models/user');

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
  const { username, password } = req.body;
  const dataToInsert = {
    username,
    password,
  };
  const result = await insertOne(dataToInsert);
  console.log(result);
  res.send(result);
}

module.exports = {
  getUsers,
  login,
  signup,
}