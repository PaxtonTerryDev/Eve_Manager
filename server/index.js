const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const cors = require("cors");
const app = express();

//routes

const db = new sqlite3.Database(
  "../db/character.sqlite",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
  }
);

app.use(cors());

const PORT = 4000;
const eveURL = "https://esi.evetech.net/latest";
const authRouter = require("./routes/auth");
const charactersRouter = require("./routes/characters");
app.use("/auth", authRouter);
app.use("/characters", charactersRouter);

app.listen(PORT, () => {
  console.log(`Port ${PORT} listening`);
});
