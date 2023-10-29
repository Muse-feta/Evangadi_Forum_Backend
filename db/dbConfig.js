const mysql2 = require("mysql2");
require("dotenv").config();

const dbConnection = mysql2.createPool({
  user: "evangadi_forum",
  password: "evangadi_forum",
  database: "evangadiforum_db",
  host: "localhost",
  connectionLimit: 10,
});

// dbConnection.execute("select 'test' ", (err, result) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(result);
//   }
// });

module.exports = dbConnection.promise()
