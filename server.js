const express = require('express');
const app = express();

// Middleware function
const logger = (req, res, next) => {
  console.log(`${new Date().toLocaleString()}: ${req.method} ${req.url}`);
  next(); // Call the next middleware function in the chain
};

// Using the middleware globally
app.use(logger);

// Route handler
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Starting the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
