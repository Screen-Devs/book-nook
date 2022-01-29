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
  lookup_id: {type: String},
  primary_isbn: {type: Number},
  reviews: [{
    username: {type: String},
    review_date: {type: Date, default: Date.now},
    rating: {type: Number, min: 1, max: 5},
    review_body: {type: String, min: 25, max: 1000},
    reported_review: {type: Boolean},
    helpful_review: {type: Number},
    comments: [{
        comment_id: new mongoose.ObjectId,
        commenter: { type: String},
        comment_time: { type: Date , default: Date.now},
        comment_body: { type: String, min: 10, max: 10000},
        reported_comment: { type: Boolean },
        helpful_comment: { type: Number },
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
