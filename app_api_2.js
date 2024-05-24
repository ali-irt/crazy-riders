const express = require('express');
const app = express();
const PORT = 3000;

// Sample user data 
let users = [];
// middleware to handle json payload in request object
app.use(express.json()); 
// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});
// Get specific user by user-id
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id); // to get user-id from req parameter
    const user = users.find(function(u) { // find() iterates over users[]
      return u.userid === userId; // it return 1st object whoes userid matches with userId 
    });  
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});
// POST new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user by ID
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  users = users.map(user => (user.id === userId ? { ...user, ...updatedUser } : user));
  res.json(users.find(user => user.id === userId));
});

// DELETE user by ID
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  users = users.filter(user => user.id !== userId);
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});