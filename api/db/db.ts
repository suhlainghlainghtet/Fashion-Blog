import mysql from "mysql";
export const db = mysql.createConnection({
  host: "localhost",
  user: "Su Hlaing",
  password: "S%@d*n%UCSL200341",
  database: "fashion_blog",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL....");
  }
});
