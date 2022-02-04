import axios from 'axios';

//*                     *//
// AUTHENTICATE
const authenticateUser = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:3010/authenticate')
    .then(response => resolve(response.data))
    .catch(err => reject(err));
  })
}

//*                     *//
// USER INTERACTION START

const getUser = (username) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:3010/users?username=${username}`)
    .then(response => resolve(response.data))
    .catch(err => reject(err));
  });
};

const addFriend = (action) => {
  return new Promise((resolve, reject) => {
    axios.put('http://localhost:3010/users/friends', action)
    .then(res => resolve(res.data))
    .catch(err => reject(err))
  })
}

const dumpFriend = (action) => {
  return new Promise((resolve, reject) => {
    axios.put('http://localhost:3010/users/friends', action)
    .then(res => resolve(res.data))
    .catch(err => reject(err))
  })
}

const commentOnCanvas = (comment) => {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:3010/users/canvas',comment)
    .then(res => resolve(res.data))
    .catch(err => reject(err));
  })
}

const putUserBook = (book) => {
  return new Promise((resolve, reject) => {
    axios.put('http://localhost:3010/users/books', book)
    .then(response => resolve(response.data))
    .catch(err => reject(err));
  })
}

const getLeaderboardData = (username) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:3010/users/leaderboards?username=${username}`)
    .then(response => resolve(response.data))
    .catch(err => reject(err));
  })
}

const getSuggestedBooks = (username) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:3010/users/suggested?username=${username}`)
    .then(response => resolve(response.data))
    .catch(err => reject(err));
  })
}
// USER INTERACTION END
//*                     *//

//*                     *//
// EXTERNAL API CALLS START

const searchGoogle = (query, count=10, page=1) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:3010/search?q=${query}&count=${count}&page=${page}`)
    .then(response => resolve(response.data))
    .catch(err => reject(err));
  });
};

const getNYTimesList = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:3010/nytimeslists')
    .then(response => resolve(response.data))
    .catch(err => reject(err));
  });
};

const getNYTimesCategory = (list_name_encoded) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:3010/nytimeslists/list?category=${list_name_encoded}`)
      .then(response => resolve(response.data))
      .catch(err => reject(err));
  });
};
// EXTERNAL API CALLS END
//*                     *//


/* BOOK DB ROUTES */
// note: all 'book_id' parameters refer to the google api's book id

// get back a book's reviews/comments data (if any)
const getBookMeta = (book_id, title) => {
  return new Promise((resolve, reject) => {
    axios({
      url: '/books/meta',
      method: 'post',
      data: { book_id, title }
    })
      .then(response => resolve(response))
      .catch(err => reject(err));
  });
}

// get back an array of the top rated books based on all books' metadata
const getHighestAvgRating = () => {
  return new Promise((resolve, reject) => {
    axios({
      url: '/books/highestAvgRating',
      method: 'get'
    })
      .then(response => resolve(response))
      .catch(err => reject(err));
  });
}

// add a review to a book's metadata
// review argument should be object: {username: STR, rating: 1-5, review_body: STR}
const addBookReview = (book_id, review) => {
  return new Promise((resolve, reject) => {
    axios({
      url: '/books/reviews',
      method: 'post',
      data: { book_id, review },
    })
      .then(response => resolve(response))
      .catch(err => reject(err));
  });
}

// add a comment to a given review on a given book's metadata
// to get review_id string, access the '_id' property of the review
// comment argument should be object: {commenter: STR, comment_body: STR}
const addReviewComment = (book_id, review_id, comment) => {
  return new Promise((resolve, reject) => {
    axios({
      url: '/books/reviews/comments',
      method: 'post',
      data: { book_id, review_id, comment },
    })
      .then(response => resolve(response))
      .catch(err => reject(err));
  });
}

// mark a review helpful or report it
// mark_type can either be 'helpful' or 'report' (STRING)
const markReview = (book_id, review_id, mark_type) => {
  return new Promise((resolve, reject) => {
    axios({
      url: '/books/reviews',
      method: 'put',
      data: { book_id, review_id, mark_type },
    })
      .then(response => resolve(response))
      .catch(err => reject(err));
  });
}

// mark a review's comment as helpful or report it
// mark_type can either be 'helpful' or 'report' (STRING)
const markReviewComment = (book_id, review_id, comment_id, mark_type) => {
  return new Promise((resolve, reject) => {
    axios({
      url: '/books/reviews/comments',
      method: 'put',
      data: { book_id, review_id, comment_id, mark_type },
    })
      .then(response => resolve(response))
      .catch(err => reject(err));
  });
}


export {
  getBookMeta,
  getHighestAvgRating,
  addBookReview,
  addReviewComment,
  markReview,
  markReviewComment,
  authenticateUser,
  getUser,
  putUserBook,
  getLeaderboardData,
  getSuggestedBooks,
  commentOnCanvas,
  addFriend,
  dumpFriend,
  searchGoogle,
  getNYTimesList,
  getNYTimesCategory,
}