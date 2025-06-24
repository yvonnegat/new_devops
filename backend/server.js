const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Serve React frontend
app.use(express.static(path.join(__dirname, 'public')));

// API route
app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
