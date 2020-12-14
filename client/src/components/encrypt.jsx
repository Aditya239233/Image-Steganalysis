import React, { Component } from "react";
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

    const data = new FormData();
    data.append("image", this.state.image);
    data.append("message", this.state.message);
    fetch("http://localhost:5000/encrypt", {
      method: "POST",
      body: data,
      type: "application/json",
    }).then((res) => {
      if (res.data.value === false) {
        alert("There was an internal error! Try Again Later");
      } else {
        res.blob().then((blob) => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement("a");
          a.href = url;
          a.download = "image.png";
          a.click();
        });
      }
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
