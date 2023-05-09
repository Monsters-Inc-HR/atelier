const axios = require('axios');
require('dotenv').config();

module.exports = {
  getProducts: (page, count) => {
    return axios({
        method: 'get',
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/',
        headers: {'authorization': process.env.API_KEY},
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
  }
}


const getProducts = (page, count) => {
  return axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/',
      headers: {'authorization': process.env.API_KEY},
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
};


// Get product information
// takes product ID parameter
const getProductDetails = (productID) => {
  if (productID === undefined) {
    console.log('Please input a valid Product ID');
  }
  return axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productID}`
  })
  .then((productDetails) => {
    return productDetails;
  })
  .catch((err) => {
    console.log(err);
  })
};



// Get product styles
// takes product ID
const getProductStyles = (productID) => {

};

// Get related products
// takes product ID
const getRelatedProducts = (productID) => {

};

// OPTIONAL: Get product images (i think it would be quite helpful to have a dedicated function for this)
const getProductImages = (productID) => {

};

// Get the full reviews data for a specific product
const getReviewsData = (productID, page, countPerPage) => {
  if (!productID) {
    console.log('Please enter a product id');
  }
  return axios({
    method: 'get',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews',
    headers: {'Authorization': process.env.API_KEY},
    params: {
      product_id: productID
    }
  })
  .then(results => JSON.parse(results))
  .catch((err) => console.log("there was an error getting reviews meta data: ", err))
}

// Get the reviews metadata for a specific product
const getReviewsMetaData = (productID) => {
  if (!productID) {
    console.log('Please enter a product id');
  }
  return axios({
    method: 'get',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta',
    headers: {'Authorization': process.env.API_KEY},
    params: {
      product_id: productID
    }
  })
  .then(results => results.data)
  .catch((err) => console.log("there was an error getting reviews meta data: ", err))
}