const express = require('express');
const path = require('path');
const app = express();
// Define the directory containing the HTML file (relative to app.js)
//const helpfile = 'demo1.html'; // Change this to the actual filename if different
//const aboutfile = 'demo2.html';
// Route = /help to send Help file
app.get('/help', (req, res) => {
    res.sendFile(path.join(__dirname, 'demo1.html'), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error serving HTML file');
      }
    });
  });
// Route = /about to senf About Us file
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'demo2.html'), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error serving HTML file');
      }
    });
  });
const port = process.env.PORT || 8080; // Use environment variable for port or default to 8080
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
