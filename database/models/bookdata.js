const { BookData } = require('../');

const getAllBookData = async (book_id) => {
  const api_data = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book_id}`;
  const metadata = await BookData.find({ lookupId: book_id });
  return { api_data, metadata }
}

const findBookMeta = async (book_id) => {
  const metadata = await BookData.find({ lookupId: book_id });
  return metadata;
}

const addBookReview = async (book_id, review) => {
  const newReview = {
    username: review.username,
    reviewDate: new Date().toISOString();
    rating: review.rating,
    reviewBody: review.reviewBody,
    report: false,
    helpful: 0,
    comments: []
  }
  const result = await BookData.updateOne({ lookupId: book_id }, {$push: {reviews: newReview}});
  return result;
}

const addBookComment = async (book_id, review_id, comment) => {
  const newComment = {
    commenter: comment.commenter,
    time: new Date().toISOString();
    comment: comment.comment;
  }
  const result = await BookData.updateOne({ lookupId: book_id,  "reviews.reviewId": review_id }, { $push { "reviews.$.comments": newComment }});
  return result;
}

const markBookReview = async (book_id, review_id, mark_type) => {
  let result;
  if (mark_type === 'report') {
    result = await BookData.updateOne({ lookupId: book_id, "reviews.reviewId": review_id }, { $set: { "reviews.$.report": true } });
  } else if (mark_type === 'helpful') {
    result = await BookData.updateOne({ lookupId: book_id, "reviews.reviewId": review_id }, { $inc: { "reviews.$.helpful": 1 } });
  }
  return result;
}

{ markBookReview, addBookComment, addBookReview, getAllBookData, findBookMeta }
