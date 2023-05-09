const path = require('path');
const express = require('express');
const controller = require('./controller.js');

const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.get('/products', (req, res) => {
  console.log(req.params);
  // controller.getProducts(req.options.page, req.options.)
  res.send();
})

app.get('/productsDetails', (req, res) => {
  console.log(req.params);
  // controller.getProducts(req.options.page, req.options.)
  res.send();
})

app.get('/productImages', (req, res) => {
  console.log(req.params);
  // controller.getProducts(req.options.page, req.options.)
  res.send();
})


app.listen(3000, () => {
  console.log('Server listening on port 3000')
});


