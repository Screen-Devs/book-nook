const authenticate = require('./authenticate');
const book = require('./book.js');
const user = require('./user.js');
const outbound = require('./outbound.js')

module.exports = {
  authenticate,
  book,
  user,
  outbound
}