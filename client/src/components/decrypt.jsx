import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Decrypt extends Component {
  message = "Hidden Message will be displayed here";
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
          <Row style={{ paddingBottom: "50px" }}>
            <button type="submit" style={{ height: "50px", width: "100px" }}>
              Submit
            </button>
          </Row>
          <Row>
            <textarea
              type="text"
              required
              placeholder={this.message}
              style={{ height: "100px", width: "550px" }}
              readOnly
            ></textarea>
          </Row>
        </Col>
      </div>
    );
  }
}

export default Decrypt;
