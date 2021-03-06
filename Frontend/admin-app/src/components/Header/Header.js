import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
 
const Header = () => {
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
        <Navbar.Brand href="/"><Link to="/" className="navbar-brand">Admin Dashboard</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">SignIn</Nav.Link> */}
            <li className="nav-item">
              <NavLink to="/signin" className="nav-link">
                  Sign In
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link">
                  Sign Up
              </NavLink>
            </li>
            {/* <Nav.Link eventKey={2} href="#memes">
          SignIn
        </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
    </Container>
      </Navbar>
  );
};

export default Header;
