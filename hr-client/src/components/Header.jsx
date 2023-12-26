import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-terirary">
      <Container>
        <Navbar.Brand>Deck Generator</Navbar.Brand>
        <Navbar.Toggle aria-aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              Fill Form
            </Link>
            <Link className="nav-link" to="/login">
              View Deck
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
