const express = require('express');
const app = express();
const PORT = 5000;

const users = {
  1: { id: 1, name: 'Alice' },
  2: { id: 2, name: 'Bob' }
};

app.get('/users', (req, res) => {
  res.json(Object.values(users));
});

app.get('/users/:id', (req, res) => {
  const user = users[req.params.id];
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'Utilisateur inconnu' });
  }
});

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});
