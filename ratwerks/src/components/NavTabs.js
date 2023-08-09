import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../images/ratwerkslogowhite.png';
import '../index.css';

function NavTabs() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <div className="container">
        <Navbar.Brand>
          <Link to="/">
            <img
              style={{ height: '70px' }}
              src={logo}
              alt="logo"
              className="nav-logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link
                to="/contact"
                style={{
                  textDecoration: 'none',
                  fontSize: '20px',
                  color: 'white',
                }}
              >
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavTabs;
