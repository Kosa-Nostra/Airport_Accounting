import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Aider2307',
  database: 'Airport_DB'
});
 
export default db;