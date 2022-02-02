const { BookData } = require('../');
const axios = require('axios');

const getAllBookData = async (book_id) => {
  const api_data = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book_id}`);
  let metadata = await BookData.find({ lookup_id: book_id });
  if (!metadata) {
    metadata = BookData.updateOne({
      lookup_id: book_id
    }, {
      lookup_id: book_id,
      reviews: [],
      comments: []
    })
  }
  return {
    api_data,
    metadata
  }
}

const findBookMeta = async (book_id) => {
  const metadata = await BookData.find({
    lookup_id: book_id
  });
  console.log(metadata);
  return metadata.data;
}

const addBookReview = async (book_id, review) => {
  const newReview = {
    username: review.username,
    rating: review.rating,
    review_body: review.review_body,
    reported_review: false,
    helpful_review: 0,
    comments: []
  }
  const result = await BookData.updateOne({
    lookup_id: book_id
  }, {
    $push: {
      reviews: newReview
    }
  });
  return result;
}

const addBookComment = async (book_id, review_id, comment) => {
  const newComment = {
    commenter: comment.commenter,
    comment_body: comment.comment_body,
    reported_comment: false,
    helpful_comment: 0
  }
  const result = await BookData.updateOne({ lookup_id: book_id,  "reviews._id": review_id }, { $push: { "reviews.$.comments": newComment }});
  return result;
}

const markBookReview = async (book_id, review_id, mark_type) => {
  let result = 0;
  if (mark_type === 'report') {
    result = await BookData.updateOne({
      lookup_id: book_id,
      "reviews._id": review_id
    }, {
      $set: {
        "reviews.$.reported_review": true
      }
    });
  } else if (mark_type === 'helpful') {
    result = await BookData.updateOne(
      { lookup_id: book_id, "reviews._id": review_id },
      { $inc: {"reviews.$.helpful_review": 1 } }
    );
  }
  return result;
}

const markReviewComment = async (book_id, review_id, comment_id, mark_type) => {
  let result;
  if (mark_type === 'report') {
    result = await BookData.updateOne(
      { lookup_id: book_id },
      { $set: { "reviews.$[review].comments.$[comment].reported_comment": true } },
      { arrayFilters: [{ "review._id": review_id }, { "comment._id": comment_id }] }
    );
    return result;
  } else if (mark_type === 'helpful') {
    result = await BookData.updateOne(
      { lookup_id: book_id },
      { $inc: { "reviews.$[review].comments.$[comment].helpful_comment": 1 } },
      { arrayFilters: [{ "review._id": review_id }, { "comment._id": comment_id }] }
    );
    return result;
  }
}


module.exports = {
  markBookReview, addBookComment, addBookReview, getAllBookData, findBookMeta, markReviewComment
}