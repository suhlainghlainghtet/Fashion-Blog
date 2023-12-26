// import mysql from "mysql2/promise";

// export const db = mysql.createPool({
//   host: "localhost",
//   user: "Su Hlaing",
//   password: "S%@d*n%UCSL200341",
//   database: "fashion_blog",
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });
import mysql from "mysql2";
// MySQL database configuration
export const db = mysql.createConnection({
  host: "localhost",
  user: "Su Hlaing",
  password: "S%@d*n%UCSL200341",
  database: "fashion_blog",
});
db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});
