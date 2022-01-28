const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/authenticate', controller.authenticate.getUsers);

router.post('/authenticate/login', controller.authenticate.login);

router.post('/authenticate/signup', controller.authenticate.signup);

router.get('*', (req, res) => {
  res.send('Test')
})

module.exports = router;