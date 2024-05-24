const express = require('express');
const app = express();
// Middleware function
const myMiddleware = (req, res, next) => {
  console.log('Middleware function called');
  next(); // Call next() to pass control to the next middleware in the stack
};
// Middleware function to log request method and URL
const logRequest = (req, res, next) => {
   const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
   console.log(`[${new Date().toISOString()}] - Request Method:${req.method} ${req.url} - Client IP: ${clientIp}`);
   //console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
   //console.log('Time:', Date.now()) 
  next();
};
// Register middleware globally
app.use(myMiddleware);
app.use(logRequest);
// Route handler
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


