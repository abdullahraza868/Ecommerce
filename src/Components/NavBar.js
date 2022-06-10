import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Banera</Navbar.Brand>
          <Nav className="me-auto d-flex align-items-center">
            <Nav.Link href="#home">Home</Nav.Link>
            
          </Nav>
        </Container>
        
              <Nav.Link href="#home"><img
                src="favicon (2).ico"
                width="30"
                height="30"
                alt="cart logo"
              /></Nav.Link>
      </Navbar>
    </div>
  );
};

export default NavBar;
