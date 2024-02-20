import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./NavBar.css" 



function NavBar() {
  return (
    <Navbar  data-bs-theme="dark" expand="lg"  >
      <Container fluid>
        <Navbar.Brand  >Iron Addict</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  href="/">Home</Nav.Link>
            <Nav.Link  href="/about">About</Nav.Link>
            <NavDropdown  title="Tools" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/calculators">Calculators</NavDropdown.Item>
              <NavDropdown.Item href="/programs">
                Programs
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
