const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "db4free.net", //178.63.64.112
    user: "bhoot_top", // admin //armantop_blogarman
    password: "@Samrat123", // p29JkvmL*KlH9g7@
    database: "bhoot_top", //blogarman //armantop_blogarman
    connectionLimit: 50,
    queueLimit: 0,
    waitForConnection: true
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

module.exports = connection;
