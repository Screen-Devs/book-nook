const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Book_Nook')
  .then(() => console.log('Book_Nook database connected'))
  .catch((error) => console.log(error));

// Schemas
const authenticateSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true,  },
  password: { type: String, required: true },
})

const bookDataSchema = new mongoose.Schema({
  bookId: {type: String},
  username: {type: String},
  primary_isbn: {type: Number},
  reviews: [],
  reviewDate: {type: Date},
  rating: {type: Number, min: 1, max: 5},
})


const Authenticate = mongoose.model('Authenticate', authenticateSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
  Authenticate,
  User
}
