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


app.listen(3000, () => {
  console.log('Server listening on port 3000')
});


