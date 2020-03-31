import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

class NavBar extends React.Component {

    render() {
        const handleSelect = (eventKey) => console.log(`selected ${eventKey}`);

        return (
            <Nav justify variant="tabs" activeKey="1" onSelect={handleSelect}>
                <Nav.Item>
                    <Nav.Link eventKey="1" href="#/home">
                        NavLink 1 content
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2" title="Item">
                        NavLink 2 content
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="3" disabled>
                        NavLink 3 content
                    </Nav.Link>
                </Nav.Item>
                <NavDropdown title="User's login" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">Show profile</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.4" onClick={this.props.logout}>Log out</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        );
    }

}

export default NavBar;
