const express = require('express');
const path = require('path');
const app = express();
// Define the directory containing the HTML file (relative to app.js)

// Route = /services to send Help file
app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'services.html'), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error serving HTML file');
      }
    });
  });
// Route = /contact to senf About Us file
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error serving HTML file');
      }
    });
  });
  // Route = /spareparts to senf About Us file
app.get('/spareparts', (req, res) => {
  res.sendFile(path.join(__dirname, 'spare-parts.html'), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error serving HTML file');
    }
  });
});
// Route = /arrivals to senf About Us file
app.get('/arrivals', (req, res) => {
  res.sendFile(path.join(__dirname, 'arrivals.html'), (err) => {
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
