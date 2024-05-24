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
    var sql = "DELETE FROM customers WHERE address='ABC Town'";
    con.query(sql, function (err, result,fields) {
      if (err) throw err;
        console.log("Record Deleted!!!");
     });
   });

