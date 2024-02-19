import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./HomeNav.css" 



function HomeNav() {
  return (
    <Navbar  data-bs-theme="dark" expand="lg"  >
      <Container fluid>
        <Navbar.Brand href="#" >Iron Addict</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  href="#action1">Home</Nav.Link>
            <Nav.Link  href="#action2">About</Nav.Link>
            <NavDropdown  title="Tools" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Calculators</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
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

export default HomeNav;
