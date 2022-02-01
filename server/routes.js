const express = require('express');
const path = require('path');
const controller = require('./controller');
const isAuth = require('./middleware/isAuth');
const { outbound, book, user } = controller;

const router = express.Router();

// API endpoints

/* LOGIN / SIGN UP */

router.get('/authenticate', isAuth);

router.get('/authenticate', controller.authenticate.authenticate);

router.post('/authenticate/login', controller.authenticate.login);

router.post('/authenticate/logout', controller.authenticate.logout);

router.post('/authenticate/signup', controller.authenticate.signup);

/* USER MODEL */

router.get('/users', user.getUserInfo );

router.post('/users/books', user.addBook);

router.post('/users/friends', user.addFriend);

router.post('/users/canvas', user.addMessage);

/* BOOK MODEL */

router.get('/books', book.getTotalBookData);

router.post('/books/reviews', book.addReview);

router.post('/books/reviews/comments', book.addComment);

router.put('/books/reviews/:review_id', book.markReview);

/* EXTERNAL APIS */

router.get('/search', outbound.getGoogleResults);

router.get('/nytimeslists', outbound.getNYTimesLists);

router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
})

module.exports = router;