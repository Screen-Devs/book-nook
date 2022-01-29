const { updateBook, findBook } = require('../../database/models/book.js');

const getBook = async (req, res) => {
const { book_id } = req.body;
const result = await findBook(book_id);
res.status(200).send(result);
}

const addReview = async (req, res) => {
  const { book_id, review } = req.body;
  const result = await updateBook(book_id, review);
  res.status(201).send(result);
}

const addComment = async (req, res) => {
const { book_id, review_id } = req.body;
const result = await updateBook(book_id, review_id);
res.status(201).send(result);
}

module.exports = {
  getBook,
  addReview,
  addComment
}