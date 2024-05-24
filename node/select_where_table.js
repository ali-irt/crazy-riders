var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "testdb"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "SELECT * FROM customers WHERE address='Highway 11'" ;
    con.query(sql, function (err, result,fields) {
      if (err) throw err;
     // Extract column names
     console.log("Column Names:");
     var columnNames = fields.map(field => field.name);
     console.log(columnNames);
     // Display row values
     console.log("Row Data:");
     result.forEach(row => {
       var values = [];
       for (var key in row) 
        {
           values.push(row[key]);
        }
       console.log(values);
     });
   });
 });
