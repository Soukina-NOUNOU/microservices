const express = require('express');
const app = express();
const PORT = 5002;

const products = {
  1: { id: 1, name: 'Ordinateur', price: 1200 },
  2: { id: 2, name: 'Clavier', price: 80 }
};

app.get('/products', (req, res) => {
  res.json(Object.values(products));
});

app.get('/products/:id', (req, res) => {
  const product = products[req.params.id];
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Produit inconnu' });
  }
});

app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});
