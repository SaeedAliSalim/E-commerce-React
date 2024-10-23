
import { Container, Nav, Navbar, Form, InputGroup, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'





function NavBar() {
    return (
        <Navbar expand="lg" >
            <Container>
                <Navbar.Brand href="#home" className='fw-bold fs-3'>Exclusive</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Conatct</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Sign Up</Nav.Link>
                    </Nav>
                    <Form inline>
                        <InputGroup>
                            <Form.Control
                                placeholder="What are you looking for?"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                id="Search-Input"
                            />
                            <InputGroup.Text id="basic-addon1"  ><FontAwesomeIcon  icon={faMagnifyingGlass} /></InputGroup.Text>
                        </InputGroup>

                    </Form>
                    <FontAwesomeIcon icon={faHeart} className='mx-3 fs-3' />
                    <FontAwesomeIcon icon={faCartShopping} className='fs-3' />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;