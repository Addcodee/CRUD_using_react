import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation()
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to='/'>
          <Navbar.Brand className={
                location.pathname === "/"
                  ? "btn btn-success"
                  : "btn btn-dark text-light"
              }>Contacts</Navbar.Brand>
          </Link>
          <Link to='add-contact'>
          <Navbar.Brand className={
                location.pathname === "/add-contact"
                  ? "btn btn-primary"
                  : "btn btn-dark text-light"
              }>Add Contact</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
