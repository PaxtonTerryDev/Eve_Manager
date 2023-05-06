import React from "react";
import Header from "../components/Header";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Test = () => {
  const { characterID, accessToken } = useSelector((state) => state.character);
  const header = {
    token: `${accessToken}`,
  };

  const url = "http://localhost:4000";
  const getAuth = async () => {
    await fetch(`${url}/auth/request`);
  };
  const getInfo = async () => {
    const response = await fetch(`${url}/characters/${characterID}`, {
      headers: header,
    });
    const data = await response.json();
    console.log(data);
  };
  const getBlueprints = async () => {
    const response = await fetch(
      `${url}/characters/${characterID}/blueprints`,
      {
        headers: header,
      }
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col>
            <div>
              <a href="https://login.eveonline.com/oauth/authorize?response_type=code&redirect_uri=http://localhost:4000/auth&client_id=6875ba5fc03a43c087d645354a414f83&scope=publicData esi-location.read_location.v1 esi-location.read_ship_type.v1 esi-skills.read_skills.v1 esi-wallet.read_character_wallet.v1 esi-clones.read_clones.v1 esi-universe.read_structures.v1 esi-killmails.read_killmails.v1 esi-assets.read_assets.v1 esi-planets.manage_planets.v1 esi-ui.open_window.v1 esi-ui.write_waypoint.v1 esi-fittings.read_fittings.v1 esi-fittings.write_fittings.v1 esi-markets.structure_markets.v1 esi-characters.read_agents_research.v1 esi-industry.read_character_jobs.v1 esi-markets.read_character_orders.v1 esi-characters.read_blueprints.v1 esi-location.read_online.v1 esi-clones.read_implants.v1 esi-industry.read_character_mining.v1">
                <Button>Authenticate</Button>
              </a>
            </div>
            <div>
              <Button onClick={getInfo}>
                Request general character information
              </Button>
            </div>
            <div>
              <Button onClick={getBlueprints}>Request Blueprints</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Test;
