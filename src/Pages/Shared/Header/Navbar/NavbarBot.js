import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
import logo from '../../../../images/logo.jpg';
import { LinkContainer } from 'react-router-bootstrap';

function NavbarBot() {
    return (
        <Container>
            <Navbar bg="white" expand="lg">

                <Navbar.Brand href="#" className='d-flex justify-content-center align-items-center'><img className='logo' src={logo} alt="" /><h2>Food<span className='text-danger'>DELI</span></h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <LinkContainer to='/'>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to=''>
                            <Nav.Link>Offers</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Restaurant" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Indian Restaurant</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                American Restaurant
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Italian Restaurant
                            </NavDropdown.Item>
                        </NavDropdown>
                        <LinkContainer to=''>
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to=''>
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default NavbarBot;