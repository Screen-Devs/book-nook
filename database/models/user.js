const { User } = require('../');

const insertOne = async (username, password) => {
  try {
    const dataToInsert = {
      username,
      password,
    }
    const result  = await User.create(dataToInsert);
    return result;
  } catch (error) {
    return error;
  }
}

const findOne = async (username) => {
  try {
    const result = await User.findOne({ username });
    return result;
  } catch (error) {
    return error;
  }
}

module.exports = {
  insertOne,
  findOne,
}