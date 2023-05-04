import React from "react";
import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import LoginModal from "../components/LoginModal";

const Character = () => {
  const { characterID, securityStatus, name, corporationID, portrait } =
    useSelector((state) => state.character);

  return (
    <>
      <Header />
      <Container fluid>
        <Row className="border border-secondary border-2 m-5 rounded">
          <Col xs={8}>
            <h1>Character Information</h1>
            <Row className="pt-3 pb-5">
              <Col>
                <img src={portrait.md} alt="" srcSet="" />
              </Col>
              <Col xs={8}>
                <h3>{name}</h3>
                <h4>{corporationID}</h4>
                <h5>{securityStatus}</h5>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      {!characterID && <LoginModal />}
    </>
  );
};

export default Character;
