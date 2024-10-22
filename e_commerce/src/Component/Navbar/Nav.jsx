
import { Container, Nav, Navbar, Form, InputGroup, Row, Col, Button } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar expand="lg" >
            <Container>
                <Navbar.Brand href="#home" className='fw-bold'>Exclusive</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Conatct</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Sign Up</Nav.Link>
                    </Nav>
                    <Form inline>
                        <InputGroup>
                            <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        </InputGroup>
                    </Form>
                
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;