import React, { PureComponent } from 'react'
import { Navbar , Container ,NavDropdown,Nav } from 'react-bootstrap'

export default class NavBar extends PureComponent {
  render() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className='w-100 border-2 border-bottom border-primary mb-4'>
            <Container>
                <Navbar.Brand href="/">Vreiln</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/Profile" className='d-flex'>Profile</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
  }
}