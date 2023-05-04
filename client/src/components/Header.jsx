import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">Eve Dashboard</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#character">Character</Nav.Link>
          <Nav.Link href="#market">Market</Nav.Link>
          <Nav.Link href="#pricing">Fittings</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
