import './styles.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image' ;
import CartWidget from '../CartWidget';

function NavBar() {
  return (
    <section className='menu'>
       <Navbar bg="light" expand="lg">
        <Container>
              <Navbar.Brand href="/home"><Image className="logo-eco" src="/logo.png" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav
                activeKey="/home"
                className="me-auto w-100 "
              >
                <div className='col-md-10 menu-eco'>
                  <Nav.Item>
                    <Nav.Link href="#">Inicio</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Nosotros</Nav.Link>
                  </Nav.Item>
                  <NavDropdown title="Productos" id="nav-dropdown">
                    <NavDropdown.Item href="#">Remeras</NavDropdown.Item>
                    <NavDropdown.Item href="#">Pantalones</NavDropdown.Item>
                    <NavDropdown.Item href="#">Sweaters</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Item>
                    <Nav.Link href="#">Contacto</Nav.Link>
                  </Nav.Item>
                </div>
                <div className='col-md-2 cart-eco'>
                  <Nav.Item>
                    <Nav.Link href="#">
                        <CartWidget />
                    </Nav.Link>
                  </Nav.Item>
                </div>
              </Nav>
            </Navbar.Collapse>
        </Container>
       </Navbar>

    </section>
  );
}

export default NavBar;
