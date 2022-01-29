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
  lookupId: {type: String},
  primary_isbn: {type: Number},
  reviews: [{
    username: {type: String},
    reviewDate: {type: Date},
    rating: {type: Number, min: 1, max: 5},
    reviewBody: {type: String, min: 25, max: 1000},
    report: {type: Boolean},
    helpful: {type: Number},
    comments: [{
        commenter: {type: String},
        time: {type: Date},
        comment: {type: String},
      }],
  }],
})


const Authenticate = mongoose.model('Authenticate', authenticateSchema);
const User = mongoose.model('User', userSchema);
const BookData = mongoose.model('BookData', bookDataSchema);

module.exports = {
  Authenticate,
  User,
  BookData,
}
