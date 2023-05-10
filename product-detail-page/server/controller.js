const axios = require('axios');
require('dotenv').config();

module.exports = {
  getProducts: (page, count) => {
    return axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/',
      headers: { 'authorization': process.env.API_KEY },
      params: {
        page: page,
        count: count
      }
    })
      .then((products) => {
        return products.data;
      })
      .catch((err) => {
        console.log(err);
      })
  },

  // Get product information
  // takes product ID parameter
  getProductDetails: (productID) => {
    if (productID === undefined) {
      console.log('Please input a valid Product ID');
    }
    return axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productID}`,
      headers: { 'authorization': process.env.API_KEY }
    })
      .then((productDetails) => {
        return productDetails.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },


  // Get product styles
  // takes product ID
  getProductStyles: (productID) => {
    if (productID === undefined) {
      console.log('Please input a valid Product ID');
    }
    return axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productID}/styles`,
      headers: { 'authorization': process.env.API_KEY }
    })
      .then((productStyles) => {
        return productStyles.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // Get related products
  // takes product ID
  getRelatedProducts: (productID) => {
    if (productID === undefined) {
      console.log('Please input a valid Product ID');
    }
    return axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productID}/related`,
      headers: { 'authorization': process.env.API_KEY }
    })
      .then((productStyles) => {
        return productStyles.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // OPTIONAL: Get product images (i think it would be quite helpful to have a dedicated function for this)
  // getProductImages: (productID) => {
  //   return 'Sorry this function is not operational yet';
  // },

  // Get the full reviews data for a specific product
  getReviewsData: (productID, page, count) => {
    if (!productID) {
      console.log('Please enter a product id');
    }
    return axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews',
      headers: { 'Authorization': process.env.API_KEY },
      params: {
        page: page,
        count: count,
        product_id: productID
      }
    })
      .then(results => results.data)
      .catch((err) => console.log("there was an error getting reviews meta data: ", err))
  },

  // Get the reviews metadata for a specific product
  getReviewsMetaData: (productID) => {
    if (!productID) {
      console.log('Please enter a product id');
    }
    return axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta',
      headers: { 'Authorization': process.env.API_KEY },
      params: {
        product_id: productID
      }
    })
      .then(results => results.data)
      .catch((err) => console.log("there was an error getting reviews meta data: ", err))
  },
};
