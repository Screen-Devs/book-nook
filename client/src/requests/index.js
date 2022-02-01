import axios from 'axios';

const getUser = (username) => {
  return new Promise((resolve, reject) => {
    axios.get(`/http://localhost:3010/users?username=${username}`)
      .then(response => resolve(response.data))
      .catch(err => reject(err));
  });
};

const searchGoogle = (query, count = 10, page = 1) => {
  return new Promise((resolve, reject) => {
    axios.get(`/search?q=${query}&count=${count}&page=${page}`)
      .then(response => resolve(response.data))
      .catch(err => reject(err));
  });
};

const getNYTimesList = () => {
  return new Promise((resolve, reject) => {
    axios.get('/nytimeslists')
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

/* BOOK DB ROUTES */
// note: all 'book_id' parameters refer to the google api's book id

// get back a book's reviews/comments data (if any)
const getBookMeta = (book_id) => {
  return new Promise((resolve, reject) => {
    axios({
      url: '/books/meta',
      method: 'get',
      data: { book_id }
    })
      .then(response => console.log(response))
      .catch(err => console.log(err));
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
      .then(response => console.log(response))
      .catch(err => console.log(err));
  })
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
      .then(response => console.log(response))
      .catch(err => console.log(err));
  })
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
      .then(response => console.log(response))
      .catch(err => console.log(err));
  })
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
      .then(response => console.log(response))
      .catch(err => console.log(err));
  })
}


export {
  searchGoogle,
  getNYTimesList,
  getNYTimesCategory,
  getUser,
}