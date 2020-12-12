import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class Navbar_ extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Image Steganalysis</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/encrypt">Encrypt</Nav.Link>
            <Nav.Link href="/decrypt">Decrypt</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navbar_;
