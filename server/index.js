// server/index.js
const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('Hello from CineCircle');
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
