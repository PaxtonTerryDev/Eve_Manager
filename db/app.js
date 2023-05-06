const sqlite3 = require("sqlite3").verbose();
let sql;

const db = new sqlite3.Database(
  "./character.sqlite",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
  }
);

sql =
  "CREATE TABLE character(character_id INTEGER UNIQUE PRIMARY KEY, character_name, corporation_number, security_status)";
db.run(sql);

// sql =
//   "INSERT INTO users(first_name,last_name,username,password,email) VALUES (?,?,?,?,?)";
// db.run(
//   sql,
//   ["Pingus", "Bingus", "PingusBingus", "Lingus", "Pingus@Bingus.com"],
//   (err) => {
//     if (err) return console.error(err.message);
//   }
// );

// sql = "DROP TABLE character";
// db.run(sql);
