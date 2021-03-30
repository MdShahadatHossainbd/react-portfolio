import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import "./Assets/Css/nav.css";
const Styles = styled.div`
.navbar{    
    background-color=#222;
}
.navbar-brand,.navbar-nav,.navbar-link{
    color:grey;
    &:hover{
        color:black;
    }
   
    
}`;
export const NavBar = (props) => (
  <React.Fragment>
    <Styles>
      <Navbar
        bg="light-translucent{50%}"
        fixed="top"
        collapseOnSelect="true"
        expand="true"
        class="navbar navbar-default navbar-fixed-top transparent"
        id="nav1"
      >
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>{" "}
        <Navbar.Brand>
          <h5>Portfolio</h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{ marginLeft: "50px" }}>
            <Nav.Item className="navlink">
              <Nav.Link href="">
                <h6>Home</h6>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="navlink">
              <Nav.Link href="">
                <h6>About</h6>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="navlink">
              <NavDropdown title={<h6>Contact</h6>} style={{ color: "red" }}>
                <NavDropdown.Item href="">
                  <h5>Instagram</h5>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">
                  <h5>Facebook</h5>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <h5>Email</h5>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  </React.Fragment>
);
