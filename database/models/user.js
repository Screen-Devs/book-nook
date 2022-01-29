const { User } = require('../');

const insertUser = async (data) => {
  // insert user data
}

const findUser = async ( user_id ) => {
  // query for user data
}

const insertUserBook = async ( user_id, list_type ) => {
  // add book to user's userBooklist - $set (favorited/current/past/queued/clubbed)
}

const insertFriend = async ( user_id, friend ) => {
  // add friend object to user's friends' list
}

const insertCanvasMessage = async ( user_id, message ) => {
  // add message to user's canvas
}

module.exports = {
  insertUser,
  findUser,
  insertUserBook,
  insertFriend,
  insertCanvasMessage
}