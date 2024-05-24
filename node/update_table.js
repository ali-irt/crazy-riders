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
    var sql = "UPDATE customers SET address = 'ABC Town' WHERE address = 'Highway 11'";
    con.query(sql, function (err, result,fields) {
      if (err) throw err;
        console.log("Record Updated!!");
     });
   });

