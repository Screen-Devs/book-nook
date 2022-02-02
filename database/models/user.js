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
    return (error);
  }
};

const findUser = async ( username ) => {
  try {
    const result = await User.find({username});
    return result;
  } catch (error) {
    return (error);
  }
};

const addOrUpdateUserBooks = async ( username, gBookId, title, authors, list, status ) => {
  //Handle input errors
  if (!username || !gBookId || !title || !authors || !list) {
    return new Error('Incorrect input- please double check you are using a user book object with all required fields');
  }
  if (!Array.isArray(authors) || typeof status !== 'boolean') {
    return new Error('One or more of your input types is incorrect.');
  }
  const findTarget = {username, 'userBooks.gBookId': gBookId };

  const checkForUser = await User.find({username}); //Check if book is in userBook List
  if (checkForUser.length === 0) {
    return new Error('Could not find the user to update.');
  }

  const userBooksList = await User.find(findTarget); //Check if book is in userBook List
  if (userBooksList.length === 0) { //Create userBook object if it doesn't exist
    try {
      const createTarget = {username};
      const createData = {
        $push: {
          userBooks: {
            'gBookId': gBookId,
            'title': title,
            'authors': authors,
            [`${list}.status`]: status,
            [`${list}.date`]: new Date().toISOString(),
          }
        }
      };
      const result = await User.updateOne(createTarget, createData, {upsert: true});
      return result;
    } catch (error) {
      return (error);
    }
  }

  //Update book if it is already in UserBooks
  if (userBooksList.length > 0) {
    const bookDocument = userBooksList[0].userBooks.filter(book => book.gBookId === gBookId);
    bookDocument[0][list].status = status;
    bookDocument[0][list].date = new Date().toISOString();
    try {
      const updateTarget = {username, "userBooks.gBookId": gBookId};
      const updateData = {
        $set: {
          "userBooks.$": [bookDocument[0]],
        }
      };
      const result = await User.updateOne(updateTarget, updateData);
      return result;
    } catch (error) {
      return (error);
    }
  }
}

const addOrRemoveFriend = async ( username, friend, action ) => {
  if (action === 'add') {
    try {
      const result = await User.update({username: username}, { $addToSet: {friends: friend} });
      return result;
    } catch (error) {
      return (error);
    }

  } else if (action === 'remove') {
    try {
      const result = await User.update({username: username}, { $pull: {friends: friend} });
      return result;
    } catch (error) {
      return (error);
    }

  } else {
    return 'Please specify an action with your request: add or remove.'
  }
}

const insertCanvasMessage = async ( username, message, commenter ) => {
  try {
    const result = await User.update({username: username},
      { $push: { canvas: { message, commenter, date: new Date().toISOString() } } });
    return result;
  } catch (error) {
    return (error);
  }
}

module.exports = {
  insertUser,
  findUser,
  addOrUpdateUserBooks,
  addOrRemoveFriend,
  insertCanvasMessage
}