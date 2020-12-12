import React, { Component } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

class Decrypt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      message: "Hidden Message Will be displayed here",
    };
  }

  retrive = (e) => {
    e.preventDefault();
    axios.get("/decrypt" + this.state.image).then((res) => {
      if (res.data != null) this.message = res.data;
      else this.message = "No hidden Message!!";
    });
  };

  render() {
    return (
      <div className="center">
        <Col>
          <form>
            <Row>
              <input
                type="file"
                onChange={(e) => this.setState({ image: e.target.files[0] })}
                required
                style={{ paddingTop: "100px", paddingBottom: "50px" }}
              ></input>{" "}
            </Row>
            <Row style={{ paddingBottom: "50px" }}>
              <button type="submit" style={{ height: "50px", width: "100px" }}>
                Submit
              </button>
            </Row>
          </form>
          <Row>
            <textarea
              type="text"
              required
              placeholder={this.state.message}
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
