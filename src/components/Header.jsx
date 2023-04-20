import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import ApiRicette from './ApiRicette';

function Header() {
  return (
     <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Mangiare...si mangiare</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
            <Link to="/">Home</Link>
            </Nav.Link>
            <NavDropdown title="Categoria" id="basic-nav-dropdown">
              <NavDropdown.Item>
              <Link to="/recipes/breakfast">breakfast</Link>
              </NavDropdown.Item>
               <NavDropdown.Item>
              <Link to="/recipes/salad">salad</Link>
              </NavDropdown.Item>
                <NavDropdown.Item>
              <Link to="/recipes/appetizer">appetizer</Link>
              </NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header