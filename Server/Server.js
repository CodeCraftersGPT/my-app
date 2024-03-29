const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4020;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define an array to hold users
let users = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "1234567890", password: "password123" },
    { id: 2, name: "Jane Doe", email: "jan@example.com", phone: "1234567890", password: "password123" }	,
    { id: 3, name: "Kevin Doe", email: "kevin@example.com", phone: "1234567890", password: "password123" }	,	
 
];



// Routes
// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Add a user
app.post('/users', (req, res) => {
  const user = req.body;
  user.id = users.length + 1; // Simple ID assignment, not suitable for production
  users.push(user);
  res.status(201).send(user);
});

// Update a user
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let userIndex = users.findIndex(user => user.id === id);
  if (userIndex >= 0) {
    users[userIndex] = { ...users[userIndex], ...req.body };
    res.send(users[userIndex]);
  } else {
    res.status(404).send({ message: "User not found" });
  }
});

// Delete a user
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(user => user.id !== id);
  res.status(204).send();
});

// Get a user by ID
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send({ message: "User not found" });
  }
});

app.listen(port, () => {
  console.log(`User management API listening at http://localhost:${port}`);
});
