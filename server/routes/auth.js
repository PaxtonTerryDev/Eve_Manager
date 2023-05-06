const express = require("express");
const router = express.Router();
const eveURL = "https://esi.evetech.net/latest/characters";

router.get("/request", (req, res) => {
  res.redirect(
    "https://login.eveonline.com/oauth/authorize?response_type=code&redirect_uri=http://localhost:4000/auth&client_id=6875ba5fc03a43c087d645354a414f83&scope=publicData esi-location.read_location.v1 esi-location.read_ship_type.v1 esi-skills.read_skills.v1 esi-wallet.read_character_wallet.v1 esi-clones.read_clones.v1 esi-universe.read_structures.v1 esi-killmails.read_killmails.v1 esi-assets.read_assets.v1 esi-planets.manage_planets.v1 esi-ui.open_window.v1 esi-ui.write_waypoint.v1 esi-fittings.read_fittings.v1 esi-fittings.write_fittings.v1 esi-markets.structure_markets.v1 esi-characters.read_agents_research.v1 esi-industry.read_character_jobs.v1 esi-markets.read_character_orders.v1 esi-characters.read_blueprints.v1 esi-location.read_online.v1 esi-clones.read_implants.v1 esi-industry.read_character_mining.v1"
  );
});

router.get("/", async (req, res) => {
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

module.exports = router;
