const { findUser, insertUserBook, insertFriend, insertCanvasMessage } = require('../../database/models/user.js')

const getUserInfo = async (req, res) => {
  const { username } = req.query;
  const result = await findUser(username);
  res.status(200).send(result);
}

const putUserBook = async (req, res) => {
  const { username, gBookId, title, authors, list, status } = req.body;
  const result = await addOrUpdateUserBooks(username, gBookId, title, authors, list, status);
  res.status(204).send(result);
}

const putFriend = async (req, res) => {
  const { username, friend } = req.body;
  const result = await addOrRemoveFriend(username, friend, action );
  res.status(204).send(result);
}

const addMessage = async (req, res) => {
  const { user_id, message_data } = req.body;
  const result = await insertCanvasMessage(user_id, message_data);
  res.status(201).send(result);
}

module.exports = {
  getUserInfo,
  putUserBook,
  putFriend,
  addMessage
}