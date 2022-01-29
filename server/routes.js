const express = require('express');
const path = require('path');
const controller = require('./controller');
const isAuth = require('./middleware/isAuth');

const router = express.Router();

// API endpoints
router.get('/authenticate', isAuth);
router.get('/authenticate', controller.authenticate.authenticate);

router.post('/authenticate/login', controller.authenticate.login);

router.post('/authenticate/logout', controller.authenticate.logout);

router.post('/authenticate/signup', controller.authenticate.signup);

router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
})

module.exports = router;