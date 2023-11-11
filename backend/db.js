const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "51.79.187.106", //178.63.64.112
    user: "trickzon_radio_episode", // admin //armantop_blogarman
    password: "@Samrat123", // p29JkvmL*KlH9g7@
    database: "trickzon_radio_episode", //blogarman //armantop_blogarman
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

module.exports = connection;
