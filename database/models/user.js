const { User } = require('../');

const insertOne = async (data) => {
  try {
    const result  = await User.create(data);
    return result;
  } catch (error) {
    return error;
  }
}

module.exports = {
  insertOne,
}