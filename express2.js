var express = require('express');
var app = express();

// Define routes, => for callback function
app.get('/help', (req, res) => {
    res.set('Content-Type', 'text/html'); // The set() function is used to set HTTP header’s content type as HTML. When the browser receives this response it will be interpreted as HTML instead of plain text.
    res.send('<h2>This is .../help... Route </h2>');
});
app.get('/about', (req, res) => {
    res.set('Content-Type', 'text/html'); // The set() function is used to set HTTP header’s content type as HTML. When the browser receives this response it will be interpreted as HTML instead of plain text.
    res.send('<h2>This is .../about... Route </h2>');
});
// Alternatively we can wrire
//app.get('/', function (req, res) 
//{
//   res.send('Hello World');
//})
// Start server
const PORT = process.env.PORT || 3000; //It first checks if there is a PORT environment variable set (commonly used in hosting environments). If not, it defaults to port 3000.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // ${PORT} is Template literal in JS
});
// var server = app.listen(3000, function () 
// {
// console.log("Express App running at http://127.0.0.1:3000/");
// })