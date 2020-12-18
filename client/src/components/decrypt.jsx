import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Decrypt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      message: "",
    };
  }

  retrive = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", this.state.image);

    fetch("/decrypt", {
      method: "POST",
      body: data,
      type: "application/json",
    })
      .then(async res => {
        const data = await res.json();
        console.log(data)
      })
      .catch((e) => {
        this.setState({ message: "Error" });
      });
  };

  render() {
    return (
      <div className="center">
        <Col>
          <form onSubmit={this.retrive}>
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
              placeholder="Hidden Message Will be displayed here"
              value={this.state.message}
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
