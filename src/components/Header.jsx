import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import '../App.css'

function Header() {
return (
<Navbar bg="dark" variant="dark" expand="lg">
<Container>
<Navbar.Brand>
<img     
        
         src={logo}
         width="70"
         height="70"
         className="d-inline-block align-top logo"
         alt="Logo"
         
       />
</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="me-auto">
<Nav.Link>
<Link className='tag' to="/">Home</Link>
</Nav.Link>
<NavDropdown className='tag' title="Categoria" id="basic-nav-dropdown">
<NavDropdown.Item>
<Link className='tag-item' to="/recipes/breakfast">breakfast</Link>
</NavDropdown.Item>
<NavDropdown.Item>
<Link className='tag-item' to="/recipes/salad">salad</Link>
</NavDropdown.Item>
<NavDropdown.Item>
<Link className='tag-item' to="/recipes/appetizer">appetizer</Link>
</NavDropdown.Item>

        </NavDropdown>
        <Link to="/login">
        <Button variant="outline-warning">Login</Button>{' '}
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)
}

export default Header