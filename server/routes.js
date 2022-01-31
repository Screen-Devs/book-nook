const express = require('express');
const path = require('path');
const controller = require('./controller');
const isAuth = require('./middleware/isAuth');
const { outbound } = controller;

const router = express.Router();

// API endpoints

/* LOGIN / SIGN UP */

router.get('/authenticate', isAuth);
router.get('/authenticate', controller.authenticate.authenticate);

router.post('/authenticate/login', controller.authenticate.login);

router.post('/authenticate/logout', controller.authenticate.logout);

router.post('/authenticate/signup', controller.authenticate.signup);

/* USER MODEL */

router.get('/users', controller.user.getUserInfo );

router.post('/users/books', controller.user.addBook);

router.post('/users/friends', controller.user.addFriend);

router.post('/users/canvas', controller.user.addMessage);

/* BOOK MODEL */

router.get('/books', controller.book.getBook);

router.post('/books/reviews', controller.book.addReview);

router.post('/books/reviews/comments', controller.book.addComment);

/* EXTERNAL APIS */
router.get('/search', outbound.getGoogleResults);

router.get('/nytimeslist', outbound.getNYTimesLists);


router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
})

module.exports = router;