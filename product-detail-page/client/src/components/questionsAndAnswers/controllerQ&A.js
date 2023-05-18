const axios = require('axios');


module.exports = {
  getQuestions: (productID = 37311, page, count) => {
    // check inputs before making the request
<<<<<<< HEAD
    if (typeof productID !== 'number' || typeof parseInt(productID) !== 'number') productID = 37315;
=======
>>>>>>> 7ff272308e069b1c3a87b2f16f945ea40744e59d
    if (page && (typeof page !== 'number' || typeof parseInt(page) !== 'number')) page = 1;
    if (count && (typeof count !== 'number' || typeof parseInt(count) !== 'number')) count = 5;


    return axios.get('http://localhost:3000/qa/questions', {
      params: {
        'product_id': productID,
        'page': page,
        'count': count
      }
    })
    .then((questions) => {
      return questions.data;
    })
    .catch((err) => {
      return err;
    })
  }
}