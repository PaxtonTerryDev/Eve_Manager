const express = require("express");
const router = express.Router();
const eveURL = "https://esi.evetech.net/latest/characters";

router.get("/:id", async (req, res) => {
  const characterID = req.params.id;
  let response = await fetch(`${eveURL}/${characterID}`);
  let characterData = await response.json();
  res.json(characterData);
});

router.get("/:id/blueprints", async (req, res) => {
  const characterID = req.params.id;
  const token = req.headers["token"];

  let response = await fetch(`${eveURL}/${characterID}/blueprints/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  let blueprintData = await response.json();
  res.json(blueprintData);
});

module.exports = router;
