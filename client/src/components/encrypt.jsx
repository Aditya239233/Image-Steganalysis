import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Encrypt extends Component {
  fileSelectedHandler = (e) => {
    console.log(e.target.files[0]);
  };

  render() {
    return (
      <div className="center">
        <Col>
          <Row>
            <input
              type="file"
              onChange={this.fileSelectedHandler}
              required
              style={{ paddingTop: "100px", paddingBottom: "50px" }}
            ></input>{" "}
          </Row>
          <Row>
            <textarea
              type="text"
              required
              placeholder="Enter a message to Encrypt"
              style={{ height: "100px", width: "550px" }}
            ></textarea>
          </Row>
          <Row style={{ paddingTop: "50px" }}>
            <button type="submit" style={{ height: "50px", width: "100px" }}>
              Submit
            </button>
          </Row>
        </Col>
      </div>
    );
  }
}

export default Encrypt;
