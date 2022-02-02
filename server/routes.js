const express = require('express');
const path = require('path');
const controller = require('./controller');
const isAuth = require('./middleware/isAuth');
const router = express.Router();

// API endpoints

/* LOGIN / SIGN UP */

router.get('/authenticate', isAuth);

router.get('/authenticate', controller.authenticate.authenticate);

router.post('/authenticate/login', controller.authenticate.login);

router.post('/authenticate/logout', controller.authenticate.logout);

router.post('/authenticate/signup', controller.authenticate.signup);

/* USER MODEL */

router.get('/users', controller.user.getUserInfo);

router.get('/users/leaderboards', controller.user.getLeaderboards);

router.get('/users/suggested', controller.user.getSuggestedBooks);

router.put('/users/books', controller.user.putUserBook);

router.put('/users/friends', controller.user.putFriend);

router.post('/users/canvas', controller.user.addMessage);

/* BOOK MODEL */

router.get('/books', controller.book.getTotalBookData);

router.get('/books/meta', controller.book.getBookMetaData);

router.post('/books/reviews', controller.book.addReview);

router.post('/books/reviews/comments', controller.book.addComment)

router.put('/books/reviews', controller.book.markReview);

router.put('/books/reviews/comments', controller.book.markComment);

/* EXTERNAL APIS */

router.get('/search', controller.outbound.getGoogleResults);

router.get('/nytimeslists', controller.outbound.getNYTimesLists);

router.get('/nytimeslists/list', controller.outbound.getNYTListResults)

router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
})

module.exports = router;