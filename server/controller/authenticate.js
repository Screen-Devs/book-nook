// const { insertUser } = require('../../database/models/user');
const { insertOne, findOne } = require('../../database/models/authenticate');
const bcrypt = require('bcryptjs')

const authenticate = async (req, res) => {
  try{
    res.send({ isAuthenticated: true })
  } catch (error) {
    res.status(400).send(error);
  }
}

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await findOne(username);

    // Error handling
    if (!user) {
      const error = { error: new Error('This user does not exist') };
      error.details = 'This user does not exist';
      res.send(error);
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      const error = { error: new Error('The user credentials are incorrect') };
      error.details = 'The user credentials are incorrect';
      res.send(error);
      return;
    }

    if (user && isMatch) {
      req.session.isAuth = true;
      res.send(user);
    }
  } catch (error) {
    res.status(400).send(error);
  }
}

const logout = async (req, res) => {
  try {
    req.session.destroy((error) => {
      if (error) throw error;
      res.send('logged out');
    })
  } catch (error) {
    res.status(400).send(error);
  }
}

const signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const result = await insertOne(username, hashed);
    // Error handling
    if (result instanceof Error) {
      // code 11000 - duplicate
      const error = { error: result }
      if (result.code === 11000) {
        error.details = 'This user exists already';
        res.send(error);
        return;
      }
    }

    res.send(result);

  } catch (error) {
    res.status(400).send(error).end();
  }
}

module.exports = {
  authenticate,
  login,
  logout,
  signup,
}