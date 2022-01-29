const mongoose = require('mongoose');

mongoose.connect('mongodb://ec2-54-152-31-241.compute-1.amazonaws.com:27017/Book_Nook')
  .then(() => console.log('Book_Nook database connected'))
  .catch((error) => console.log(error));

// Schemas
const authenticateSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  userBooks: [{
    userBookId: String, //googleapi book ID
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true, unique: true },
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
    }, {timestamps: true} ],
  friends: [{ _id: false, username: String }],
  settings: {
    theme: { type: String },
   },
}, {timestamps: true} );

const canvasSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    min: 10,
    max: 500,
    required: true
  },
}, {
  timestamps: true
});

const bookDataSchema = new mongoose.Schema({
  lookupId: {
    type: String
  },
  primary_isbn: {
    type: Number
  },
  reviews: [{
    username: {
      type: String
    },
    reviewDate: {
      type: Date
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    reviewBody: {
      type: String,
      min: 25,
      max: 1000
    },
    report: {
      type: Boolean
    },
    helpful: {
      type: Number
    },
    comments: [{
      commenter: {
        type: String
      },
      time: {
        type: Date
      },
      comment: {
        type: String
      },
    }],
  }],
});


const Authenticate = mongoose.model('Authenticate', authenticateSchema);
const User = mongoose.model('User', userSchema);
const Canvas = mongoose.model('Canvas', canvasSchema);
const BookData = mongoose.model('BookData', bookDataSchema);

module.exports = {
  Authenticate,
  User,
  Canvas,
  BookData
}
