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

const addOrUpdateUserBooks = async ( username, gBookId, title, authors, list, status ) => {
  const findTarget = {username, 'userBooks.gBookId': gBookId };
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
      return (error)
    }
  }

  if (userBookList.length > 0) { //Update book if it is already in UserBooks
    const bookDocument = userBooksList[0].userBooks.filter(book => book.gBookId === gBookId);
    bookDocument[listNew].status = statusNew;
    bookDocument[listNew].date = new Date().toISOString();

    try {
      const updateTarget = {username, "userBooks.gBookId": gBookId};
      const updateData = {
        $set: {
          "userBooks.$": [bookDocument],
        }
      };

      const result = await User.updateOne(updateTarget, updateData);
      return result;
    } catch (error) {
      return (error)
    }
  }
}

const addOrRemoveFriend = async ( username, friend, action ) => {
  // add friend object to user's friends' list

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
}

const insertCanvasMessage = async ( user_id, message ) => {
  // add message to user's canvas
}

module.exports = {
  insertUser,
  findUser,
  addOrUpdateUserBooks,
  addOrRemoveFriend,
  insertCanvasMessage
}