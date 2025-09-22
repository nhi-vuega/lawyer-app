// backend/index.js
const express = require('express');
const app = express();
const port = 5000; // Choose a port for your backend

// A simple test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});