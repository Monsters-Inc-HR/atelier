const axios = require('axios');



  module.exports = {
    getRelatedProducts: (productID = '37311') => {
    return axios(`http://localhost:3000/relatedProducts?id=${productID}`)
    .then((products) => {
      return products.data;
    })
    .catch((err) => {
      console.log(err);
    })
  },

  getProductStyles: (productID) => {
    return axios(`http://localhost:3000/styles?id=${productID}`)
    .then((product) => {
      return product.data;
    })
    .catch((err) => {
      console.log(err);
    })
  }
}


