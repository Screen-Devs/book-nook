const { findUser, addOrRemoveFriend, insertUserBook, insertFriend, insertCanvasMessage } = require('../../database/models/user.js')

const getUserInfo = async (req, res) => {
  const { username } = req.query;
  const result = await findUser(username)
  res.status(200).json(result);
}

const putUserBook = async (req, res) => {
  const { username, gBookId, title, authors, list, status } = req.body;
  const result = await addOrUpdateUserBooks(username, gBookId, title, authors, list, status);
  res.status(204).send(result);
}

const putFriend = async (req, res) => {
  const { username, friend, action } = req.body;
  const result = await addOrRemoveFriend(username, friend, action );
  res.status(204).send(result);
}

const addMessage = async (req, res) => {
  const { username, message, commenter } = req.body;
  const result = await insertCanvasMessage(username, message, commenter);
  res.status(201).send(result);
}

module.exports = {
  getUserInfo,
  putUserBook,
  putFriend,
  addMessage
}