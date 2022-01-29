const mongoose = require('mongoose');

mongoose.connect('mongodb://ec2-54-152-31-241.compute-1.amazonaws.com:27017/Book_Nook')
  .then(() => console.log('Book_Nook database connected'))
  .catch((error) => console.log(error));

// Schemas
const authenticateSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true,  },
  password: { type: String, required: true },
})



const Authenticate = mongoose.model('Authenticate', authenticateSchema);
// const User = mongoose.model('User', userSchema);
const BookData = mongoose.model('BookData', bookDataSchema);

module.exports = {
  Authenticate,
  // User,
  BookData,
}
