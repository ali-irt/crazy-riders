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
    var sql = "SELECT * FROM customers" ;
    con.query(sql, function (err, result,fields) {
      if (err) throw err;
      //console.log("Record Selected");
      //console.log(result);
    // console.log("Column Names:");
    // console.log(fields.map(field => field.name));
    // console.log("Row Data:");
    // console.log(result);
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
// This modified code will output only the column names followed by the corresponding row values for each row in the customers table.
