const { User } = require('../');
const axios = require('axios');

const nytListOptions = [
  'combined-print-and-e-book-fiction',
  'combined-print-and-e-book-nonfiction',
  'hardcover-advice',
  'series-books',
  'animals',
  'culture',
  'espionage',
  'expeditions-disasters-and-adventures',
  'humor',
  'indigenous-americans',
  'mass-market-monthly',
  'science',
];

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

const getLeaderboardData = async ( username ) => {
  if (!username || typeof username !== 'string') {
    return new Error('Please be sure to specify a username string parameter');
  }

  try {
    const userDocument = await User.find({username}); //Get specified user's data
    if (userDocument.length === 0) {
      return new Error('Could not find the specified user.');
    }

    const friends = userDocument[0].friends;
    const leaderBoards = [];

    if (friends.length === 0) { return leaderBoards; }
    for (const friend of friends) {
      const {userBooks} = await User.findOne({username: friend});

      let clubbedCount = 0;
      let completedCount = 0;
      userBooks.forEach(book => {
        if (book.clubbed.status === true) { clubbedCount++; }
        if (book.past.status === true) { completedCount++; }
      });
      const friendMetas = {
        friend,
        clubbedCount,
        completedCount
      };
      leaderBoards.push(friendMetas);
    };

    return leaderBoards;
  } catch (error) {
    return (error);
  }
};


const buildSuggestedBookList =  async ( username ) => {
  if (!username || typeof username !== 'string') {
    return new Error('Please be sure to specify a username string parameter');
  }

  try {
    const userDocument = await User.find({username}); //Get specified user's data
    if (userDocument.length === 0) {
      return new Error('Could not find the specified user.');
    }
    //Filter user book list by active, remove duplicates
    const activeBookAuthors = userDocument[0].userBooks.filter(book => {
      let activeBook = false;
      if (
        book.clubbed.status === true ||
        book.current.status === true ||
        book.past.status === true
      ) {
        activeBook = true;
      }
      return activeBook;
    })
    .map(book => {
      return book.authors[0];
    });
    const authorsNoDupes = [...new Set(activeBookAuthors)];

    //If active book list is empty, return NYT best seller books
    if (authorsNoDupes.length === 0) {
      //return some NYT best seller books
      const randomIndex = Math.floor(Math.random() * 12);
      const randomCat = nytListOptions[randomIndex];
      let modifier = 1;
      if (randomIndex === 11) { modifier = -1};
      const randomCat2 = nytListOptions[randomIndex + modifier];

      const getNYTimesCategory = (list_name_encoded) => {
        return new Promise((resolve, reject) => {
          axios.get(`http://localhost:3010/nytimeslists/list?category=${list_name_encoded}`)
            .then(response => resolve(response.data))
            .catch(err => reject(err));
        });
      };

      const results = await getNYTimesCategory(randomCat);
      const randomResIndex = Math.floor(Math.random() * results.length);
      const randomResIndex2 = Math.floor(Math.random() * results.length);
      const randomResIndex3 = Math.floor(Math.random() * results.length);
      const results2 = await getNYTimesCategory(randomCat2);
      const randomRes2Index = Math.floor(Math.random() * results.length);
      const randomRes2Index2 = Math.floor(Math.random() * results.length);
      const randomRes2Index3 = Math.floor(Math.random() * results.length);

      const suggestedBooks = [
        results[randomRes2Index3],
        results[randomResIndex2],
        results[randomRes2Index],
        results[randomResIndex],
        results[randomResIndex3],
        results[randomRes2Index2],
      ].map(bookResult => {
        return {
          gBookId: null,
          title: bookResult.title,
          authors: [bookResult.author],
          isbn10: bookResult.primary_isbn10,
          isbn13: bookResult.primary_isbn13,
          description: bookResult.description,
          imageUrl: bookResult.book_image,
        };
      });

      return suggestedBooks;
    }

    //Compile related books from Google API using two random active book authors
    const randomIndex = Math.floor(Math.random() * authorsNoDupes.length);
    const authorToSearch = authorsNoDupes[randomIndex].replace(' ', '+');
    let secondSearch = false;
    let modifier = 1;
    let authorToSearch2 = '';
    if (authorsNoDupes.length > 1) {
      if (randomIndex === authorsNoDupes.length - 1) { modifier = -1};
      authorToSearch2 = authorsNoDupes[randomIndex + modifier].replace(' ', '+');
      secondSearch = true;
    }

    const searchGoogle = (query, count=10, page=1) => {
      return new Promise((resolve, reject) => {
        axios.get(`http://localhost:3010/search?q=${query}&count=${count}&page=${page}`)
        .then(response => resolve(response.data))
        .catch(err => reject(err));
      });
    };

    const results = await searchGoogle(`+inauthor:${authorToSearch}`);
    const filteredResults = results.filter((bookResult, i) => {
        return i < 3;
      }).map(bookResult => {
        return {
          gBookId: bookResult.id,
          title: bookResult.volumeInfo.title,
          authors: bookResult.volumeInfo.authors,
          isbn10: bookResult.volumeInfo.industryIdentifiers.primary_isbn10,
          isbn13: bookResult.volumeInfo.industryIdentifiers.primary_isbn13,
          description: bookResult.volumeInfo.description,
          imageUrl: bookResult.volumeInfo.imageLinks.smallThumbnail,
        };
      });
    const results2 = await searchGoogle(`+inauthor:${authorToSearch2}`);
    const filteredResults2 = results2.filter((bookResult, i) => {
        return i < 3;
      }).map(bookResult => {
        return {
          gBookId: bookResult.id,
          title: bookResult.volumeInfo.title,
          authors: bookResult.volumeInfo.authors,
          publisher: bookResult.volumeInfo.publisher,
          isbn10: bookResult.volumeInfo.industryIdentifiers.primary_isbn10,
          isbn13: bookResult.volumeInfo.industryIdentifiers.primary_isbn13,
          description: bookResult.volumeInfo.description,
          imageUrl: bookResult.volumeInfo.imageLinks.smallThumbnail,
        };
      });

    const sorter = (a, b) => {
      const resultA = a.title.toUpperCase();
      const resultBb = b.title.toUpperCase();
      let comparison = 0;
      if (resultA > resultBb) {
        comparison = 1;
      } else if (resultA < resultBb) {
        comparison = -1;
      }
      return comparison;
    };

      return [...filteredResults, ...filteredResults2].sort(sorter);
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

  const checkForUser = await User.find({username}); //Check if user exists
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
  getLeaderboardData,
  buildSuggestedBookList,
  addOrUpdateUserBooks,
  addOrRemoveFriend,
  insertCanvasMessage
}