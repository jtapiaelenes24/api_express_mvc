const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "1234",
  database: "courses",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Base de datos conectada.");
});

module.exports = db;
