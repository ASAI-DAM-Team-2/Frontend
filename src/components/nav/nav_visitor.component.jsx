import React from 'react';
import { Nav } from 'react-bootstrap';

class NavBar extends React.Component {

    render() {
        const handleSelect = (eventKey) => console.log(`selected ${eventKey}`);

        return (
            <Nav className="justify-content-center" activeKey="1" onSelect={handleSelect}>
                <Nav.Item onClick={this.props.login}>
                    <Nav.Link eventKey="1" href="#/home">
                        Login
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2" title="Item">
                        Register
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        );
    }

}

export default NavBar;
