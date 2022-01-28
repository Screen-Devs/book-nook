const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Book_Nook')
  .then(() => console.log('Book_Nook database connected'))
  .catch((error) => console.log(error));

// Schemas
  const usersSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String },
})

const User = mongoose.model('User', usersSchema);

module.exports = {
  User,
}
