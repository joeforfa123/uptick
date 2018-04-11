var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
   host: "10.21.28.102",
   user: "DB_USER",
   password: "DB_PASSWORD",
   database: "DB_NAME"
});

mysqlConnection.connect(function(err) {
    if (err) throw err;
});

module.exports = mysqlConnection;
