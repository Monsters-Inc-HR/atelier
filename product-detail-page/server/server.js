const path = require('path');
const express = require('express');
const controller = require('./controller.js');

const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.get('/products', (req, res) => {
  // console.log(req.url.split('&'));
  let split = req.url.split('&');
  let params = {page: split[0].split('=')[1], count: split[1].split('=')[1] }

  controller.getProducts(params.page, params.count)
  .then((products) => {
    res.send(products);
  })
  .catch((err) => {
    res.send(err);
  })
});

app.get('/productDetails', (req, res) => {
  let productID = req.url.split('=')[1];
  controller.getProductDetails(productID)
  .then((details) => {
    res.send(details);
  })
  .catch((err) => {
    res.send(err);
  })
});


app.get('/relatedProducts', (req, res) => {
  let productID = req.url.split('=')[1];
  controller.getRelatedProducts(productID)
  .then((details) => {
    res.send(details);
  })
  .catch((err) => {
    res.send(err);
  })
});

app.get('/styles', (req, res) => {
  let productID = req.url.split('=')[1];
  controller.getProductStyles(productID)
  .then((details) => {
    res.send(details);
  })
  .catch((err) => {
    res.send(err);
  })
})

app.get('/reviews', (req, res) => {
  let paramsString = req.url.split('?')[1];
  let paramsTuples = paramsString.split('&').map((pair) => pair.split('='));
  let productID = paramsTuples.find([name, val] => name === 'product_id')[1];
  let page = paramsTuples.find([name, val] => name === 'page');  // will be undefined if this param has not been provided
  if (page) page = page[1];  // sets this to parameter value only if it exists
  let count = paramsTuples.find([name, val] => name === 'count');  // will be undefined if this param has not been provided
  if (count) count = count[1];  // sets this to parameter value only if it exists
  controller.getReviewsData(productID, page, count)
    .then(results => res.send(results))
    .catch(err => res.send(err));
})

app.get('/reviews/meta', (req, res) => {
  let paramsString = req.url.split('?')[1];
  let paramsTuples = paramsString.split('&').map((pair) => pair.split('='));
  let productID = paramsTuples.find([name, val] => name === 'product_id')[1];
  controller.getReviewsMetaData(productID)
    .then(results => res.send(results))
    .catch(err => res.send(err));
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
});


