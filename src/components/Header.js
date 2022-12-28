import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";

function header() {

    const common = {
        marginRight:15,
        fontSize:17,
        letterSpacing:".5px"
    }


  return (
    <>
    <Navbar bg="light" variant="light">
      <Container>
        <div>
          <h2 className="mt-2 h2_right" style={{color:"#6c63ff"}} >
            <Nav.Link href="#home">Pranav Gosai</Nav.Link>
          </h2>
        </div>
        <Nav className="">
            <div className="mt-2" >
          <NavLink to="/" className="text-decoration-none" style={common} >Home</NavLink>
          <NavLink to="/About" className="text-decoration-none" style={common} >About</NavLink>
          <NavLink to="/Projects" className="text-decoration-none" style={common} >Projects</NavLink>
          <NavLink to="/Contact" className="text-decoration-none" style={common} >Contact</NavLink>
          </div>
          <div>
          <Button variant="danger">youtube</Button>
          </div>
        </Nav>
      </Container>
    </Navbar>
    </>
  );
}

export default header;
