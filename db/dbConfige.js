const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
  // user: "evangadi-admin",
  // database: "evangadi-db",
  // host: "localhost",
  // password: "123456",
  user: process.env.USER,
  database: process.env.DATABASE,
  host: "localhost",
  password: process.env.PASSWORD,
  port: 3306,
  connectionLimit: 10,
});
// console.log(process.env.JWT_SECRET);
// dbConnection.execute("SELECT 'test'", (err, result) => {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log(result);
//     }
// });

module.exports = dbConnection.promise();
