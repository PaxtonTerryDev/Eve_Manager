const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const cors = require("cors");
const app = express();

//routes
const charactersRouter = require("./routes/characters");
app.use("/characters", charactersRouter);

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

app.get("/auth", async (req, res) => {
  console.log("Getting Authorization...");
  const code = req.query.code;
  const bodyInfo = {
    grant_type: "authorization_code",
    code: `${code}`,
  };
  const response = await fetch("https://login.eveonline.com/oauth/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic Njg3NWJhNWZjMDNhNDNjMDg3ZDY0NTM1NGE0MTRmODM6Zm9YYjNtdUpEdmtWR0lzVmNCQTVyT3NURXFvdVFDeDk3OUdYaGRiMQ==",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyInfo),
  });
  const { access_token, expires_in, refresh_token } = await response.json();
  const characterAuth = await fetch(
    "https://login.eveonline.com/oauth/verify",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  const characterAuthResponse = await characterAuth.json();
  const characterData = {
    characterID: characterAuthResponse.CharacterID,
    characterName: characterAuthResponse.CharacterName,
    access_token: access_token,
  };
  console.log(characterData);
  res.redirect(
    `http://localhost:3000/character-dashboard?characterID=${characterData.characterID}&auth=${characterData.access_token}`
  );
});

app.listen(PORT, () => {
  console.log(`Port ${PORT} listening`);
});
