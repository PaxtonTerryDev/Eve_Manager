const express = require("express");
const router = express.Router();
const eveURL = "https://esi.evetech.net/latest/characters";
const setHeaders = (token) => {
  return { Authorization: `Bearer ${token}` };
};

router.get("/:id", async (req, res) => {
  const characterID = req.params.id;
  let response = await fetch(`${eveURL}/${characterID}/`);
  let characterData = await response.json();
  console.log(characterData);
});

router.get("/:id/blueprints/:token", async (req, res) => {
  const characterID = req.params.id;
  const token = req.params.token;

  console.log("requestReceived \n", characterID, token);
  let response = await fetch(`${eveURL}/${characterID}/blueprints/`, {
    headers: setHeaders(token),
  });
  let blueprintData = await response.json();
  console.log(blueprintData);
});

module.exports = router;
