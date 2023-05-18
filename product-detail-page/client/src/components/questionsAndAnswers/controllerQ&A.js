const axios = require('axios');


module.exports = {
  getQuestions: (productID = 37311, page, count) => {
    // check inputs before making the request
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