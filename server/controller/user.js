const { findUser, insertUserBook, insertFriend, insertCanvasMessage } = require('../../database/models/user.js')

const getUserInfo = async (req, res) => {
  const { user_id } = req.body;
  const result = await findUser(user_id);
  res.status(200).send(result);
}

const addBook = async (req, res) => {
  const { user_id, list_type } = req.body;
  const result = await insertUserBook(user_id, list_type);
  res.status(201).send(result);
}

const addFriend = async (req, res) => {
  const { user_id, friend_data } = req.body;
  const result = await insertFriend(user_ud, friend_data);
  res.status(201).send(result);
}

const addMessage = async (req, res) => {
  const { user_id, message_data } = req.body;
  const result = await insertCanvasMessage(user_id, message_data);
  res.status(201).send(result);
}

module.exports = {
  getUserInfo,
  addBook,
  addFriend,
  addMessage
}