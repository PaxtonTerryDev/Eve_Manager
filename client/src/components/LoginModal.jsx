import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { character } from "../requests";

export default function LoginModal(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Modal
      {...props}
      size="lg"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      className="d-flex justify-content-center"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className="ml-5 mr-5">
          Connect your character
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">
        <a href="https://login.eveonline.com/oauth/authorize?response_type=code&redirect_uri=http://localhost:4000/auth&client_id=6875ba5fc03a43c087d645354a414f83&scope=publicData esi-location.read_location.v1 esi-location.read_ship_type.v1 esi-skills.read_skills.v1 esi-wallet.read_character_wallet.v1 esi-clones.read_clones.v1 esi-universe.read_structures.v1 esi-killmails.read_killmails.v1 esi-assets.read_assets.v1 esi-planets.manage_planets.v1 esi-ui.open_window.v1 esi-ui.write_waypoint.v1 esi-fittings.read_fittings.v1 esi-fittings.write_fittings.v1 esi-markets.structure_markets.v1 esi-characters.read_agents_research.v1 esi-industry.read_character_jobs.v1 esi-markets.read_character_orders.v1 esi-characters.read_blueprints.v1 esi-location.read_online.v1 esi-clones.read_implants.v1 esi-industry.read_character_mining.v1">
          <Button>Login To Eve</Button>
        </a>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
