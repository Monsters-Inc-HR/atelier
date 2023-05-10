const axios = require('axios');

module.exports = {

  getProducts = (page = 1, count = 5) => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/'
    })
  }
}