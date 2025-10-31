const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 5001;

const orders = {
  1: [{ id: 101, item: 'Livre' }, { id: 102, item: 'Stylo' }],
  2: [{ id: 103, item: 'Cahier' }]
};

const USER_SERVICE_URL = 'http://localhost:5000/users';

app.get('/orders', (req, res) => {
  res.json(orders);
});

app.get('/orders/:user_id', async (req, res) => {
  const userId = req.params.user_id;

  try {
    await axios.get(`${USER_SERVICE_URL}/${userId}`);
    const userOrders = orders[parseInt(userId)] || [];

    res.json(userOrders);
  } catch (error) {
    res.status(404).json({ error: 'Utilisateur inconnu' });
  }
});

app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
});
