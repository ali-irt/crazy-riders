var express = require('express');
var app = express();

// Define routes, => for callback function
app.get('//', (req, res) => {
   res.send('Hello World!');
});
// Alternatively we can wrire
//app.get('/', function (req, res) 
//{
//   res.send('Hello World');
//})
// Start server
// const PORT = process.env.PORT || 3000; //It first checks if there is a PORT environment variable set (commonly used in hosting environments). If not, it defaults to port 3000.
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
var server = app.listen(3000, function () 
{
console.log("Express App running at http://127.0.0.1:3000/");
//console.log("Server Details:");
//console.log(server);
})