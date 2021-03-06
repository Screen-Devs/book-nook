const mongoose = require('mongoose');

mongoose.connect('mongodb://ec2-54-152-31-241.compute-1.amazonaws.com:27017/Book_Nook')
  .then(() => {console.log('Book_Nook database connected')})
  .catch((error) => console.log(error));

// Schemas
const authenticateSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const userBookSchema = new mongoose.Schema({
  gBookId: { type: String, unique: false }, //googleapi book ID
  title: { type: String, unique: false},
  authors: { type: Array, unique: false },
  clubbed: {
    status: { type: Boolean, default: false },
    date: { type: String, default: null },
  },
  current: {
    status: { type: Boolean, default: false },
    date: { type: String, default: null },
  },
  past: {
    status: { type: Boolean, default: false },
    date: { type: String, default: null },
  },
  queued: {
    status: { type: Boolean, default: false },
    date: { type: String, default: null },
  },
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  userBooks: [userBookSchema],
  friends: Array,
  canvas: Array,
  settings: { theme: { type: String } },
}, {
  timestamps: true
});

const bookDataSchema = new mongoose.Schema({
  lookup_id: { type: String },
  title: { type: String },
  reviews: [{
    username: { type: String },
    review_date: { type: Date, default: Date.now },
    rating: { type: Number, min: 1, max: 5 },
    review_body: { type: String, min: 25, max: 1000 },
    reported_review: { type: Boolean },
    helpful_review: { type: Number },
    comments: [{
      commenter: { type: String },
      comment_time: { type: Date, default: Date.now },
      comment_body: { type: String, min: 10, max: 1000 },
      reported_comment: { type: Boolean },
      helpful_comment: { type: Number },
    }],
  }],
})


const Authenticate = mongoose.model('Authenticate', authenticateSchema);
    const User = mongoose.model('User', userSchema);
    const BookData = mongoose.model('Book', bookDataSchema);

    module.exports = {
      Authenticate,
      User,
      BookData
    }