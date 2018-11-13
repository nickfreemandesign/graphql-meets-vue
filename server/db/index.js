var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "employees"
});

db.connect((err) => {
  if (err) throw err 
});

module.exports = db
