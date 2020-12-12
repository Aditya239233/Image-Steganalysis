import React, { Component } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

class Encrypt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      message: "",
    };
  }

  hide = (e) => {
    e.preventDefault();
    console.log(this.state.image);
    axios
      .get("/encrypt" + this.state.image + "/" + this.state.message)
      .then((res) => {
        res.blob().then((blob) => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement("a");
          a.href = url;
          a.download = "image.png";
          a.click();
        });
      });
  };

  render() {
    return (
      <div className="center">
        <form onSubmit={this.hide}>
          <Col>
            <Row>
              <input
                type="file"
                name="image"
                onChange={(e) => this.setState({ image: e.target.files[0] })}
                required
                style={{ paddingTop: "100px", paddingBottom: "50px" }}
              ></input>{" "}
            </Row>
            <Row>
              <textarea
                type="text"
                image="message"
                required
                placeholder="Enter a message to Encrypt"
                onChange={(e) => this.setState({ message: e.target.value })}
                style={{ height: "100px", width: "550px" }}
              ></textarea>
            </Row>
            <Row style={{ paddingTop: "50px" }}>
              <button type="submit" style={{ height: "50px", width: "100px" }}>
                Submit
              </button>
            </Row>
          </Col>
        </form>
      </div>
    );
  }
}

export default Encrypt;
