const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

// Middleware function
const myMiddleware = (req, res, next) => {
  console.log('Middleware function called');
  next(); // Call next() to pass control to the next middleware in the stack
};

// Middleware function to log Date, request method, URL, IP Address
const logRequest = (req, res, next) => {
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(`[${new Date().toISOString()}] - Request Method: ${req.method} ${req.url} - Client IP: ${clientIp}`);
  next();
};

// Register middleware globally
app.use(myMiddleware);
app.use(logRequest);

// Use morgan for logging
app.use(morgan('combined'));

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route handler
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
