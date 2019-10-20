import React from 'react';
import { Link }  from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './App.css';
import Routes from './Routes';
import { LinkContainer } from "react-router-bootstrap";

function App(props) {
  return (
    <div className="App container">
      <Navbar fluid="true" collapseOnSelect className="navbar-dark">
        
          <Navbar.Brand>
            <Link to="/">Scratch</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        
        <Navbar.Collapse>
          <Nav className="pull-right">
            <LinkContainer to="/signup" className="stretched-link">
              <NavItem>Signup</NavItem>
            </LinkContainer>
            <LinkContainer to="/login">
              <NavItem>Login</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
