const { User } = require('../');

const insertUser = async (username) => {
  try {
    const dataToInsert = {
      username: username,
      userBooks: [],
      friends: [],
      canvas: [],
      settings: {
        theme: 'light',
      }
    };
    const result = await User.create(dataToInsert);
    return result;
  } catch (error) {
    return (error)
  }
};

const findUser = async ( username ) => {
  try {
    const result = await User.find({username});
    return result;
  } catch (error) {
    return (error)
  }
};

const insertUserBook = async ( username, gBookId, title, authors, list, status ) => {
  // add book to user's userBooklist - $set (favorited/current/past/queued/clubbed)
    try {
    const updateTarget = {username, 'userBooks.$.gBookId': gBookId };
    const updateData = {
      $set: {
          'userBooks.$.gBookId': gBookId,
          'userBooks.$.title': title,
          'userBooks.$.authors': authors,
          [`userBooks.$.${list}.status`]: status,
          [`userBooks.$.${list}.date`]: new Date().toISOString(),
        }
    };

    const result = await User.findOneAndUpdate(updateTarget, updateData, {
      upsert: true,
    });
    console.log(result);
    return result;
  } catch (error) {
    return (error)
  }
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