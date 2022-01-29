const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Book_Nook')
  .then(() => console.log('Book_Nook database connected'))
  .catch((error) => console.log(error));

// Schemas
const authenticateSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true,  },
  password: { type: String, required: true },
})

// TODO: create User schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  userbook: {},
  friends: [],
  canvas: [],
  settings: {},
})

const Authenticate = mongoose.model('Authenticate', authenticateSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
  Authenticate,
  User
}
