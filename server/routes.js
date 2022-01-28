const express = require('express');
const controller = require('./controller');
const path = require('path');

const router = express.Router();

// API endpoints
router.get('/authenticate', controller.authenticate.getUsers);

router.post('/authenticate/login', controller.authenticate.login);

router.post('/authenticate/signup', controller.authenticate.signup);

router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
})

module.exports = router;