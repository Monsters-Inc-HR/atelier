const axios = require('axios');

module.exports = {
  getPageOfReviews: (productID = 37311, page, count) => {
    // check inputs before making the request
    if (typeof productID !== 'number' || typeof parseInt(productID) !== number) productID = 37311;
    if page && (typeof page !== 'number' || typeof parseInt(page) !== number) page = 1;
    if count && (typeof count !== 'number' || typeof parseInt(count) !== number) count = 5;

    return axios.get('http://localhost:3000/reviews', {
      params: {
        product_id: productID,
        page: page,
        count: count
      }
    })
    .then((reviews) => {
      return reviews.data;
    })
    .catch((err) => {
      console.log(err);
    })
  },
  getReviewsMetaData: (productID = 37311) => {
    // check inputs before making the request
    if (typeof productID !== 'number' || typeof parseInt(productID) !== number) productID = 37311;
    return axios.get('http://localhost:3000/reviews/meta', {
      params: {
        product_id: productID,
      }
    })
    .then((reviewsMeta) => {
      return reviewsMeta.data;
    })
    .catch((err) => {
      console.log(err);
    })
  }
};