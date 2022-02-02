const { markBookReview, addBookComment, addBookReview, getAllBookData, findBookMeta, markReviewComment } = require('../../database/models/bookdata.js');

const getTotalBookData = async (req, res) => {
  const { book_id } = req.body;
  const result = await getAllBookData(book_id);
  res.status(200).send(result);
}

const getBookMetaData = async (req, res) => {
  const { book_id } = req.body;
  const result = await findBookMeta(book_id);
  res.status(200).send(result);
}

const addReview = async (req, res) => {
  const { book_id, review } = req.body;
  const result = await addBookReview(book_id, review);
  res.status(201).send(result);
}

const markReview = async (req, res) => {
  const { book_id, review_id, mark_type } = req.body;
  const result = await markBookReview(book_id, review_id, mark_type);
  res.status(200).send(result);
}

const addComment = async (req, res) => {
  const { book_id, review_id, comment } = req.body;
  const result = await addBookComment(book_id, review_id, comment);
  res.status(201).send(result);
}

const markComment = async (req, res) => {
  const { book_id, review_id, comment_id, mark_type } = req.body;
  const result = await markReviewComment(book_id, review_id, comment_id, mark_type);
  res.status(201).send(result);
}

module.exports = {
  getTotalBookData,
  getBookMetaData,
  addReview,
  markReview,
  addComment,
  markComment
}