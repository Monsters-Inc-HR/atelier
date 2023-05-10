const axios = require('axios');

module.exports = {

  getProducts: (page = 1, count = 5) => {
    axios(`http://localhost:3000/products?page=${page}&count=${count}`)
    .then((products) => {
      return products;
    })
    .catch((err) => {
      console.log(err);
    })
  }
}