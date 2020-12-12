import React, { Component } from "react";

class Dashboard extends Component {
  openUrl() {
    window.open(
      "https://searchsecurity.techtarget.com/definition/steganography#:~:text=Steganography%20is%20the%20technique%20of,for%20hiding%20or%20protecting%20data."
    );
  }
  render() {
    return (
      <div>
        <div className="centertext">
          Steganography is the technique of hiding secret data within an
          ordinary, non-secret, file or message in order to avoid detection
        </div>
        <div className="centertext">
          The use of steganography can be combined with encryption as an extra
          step for hiding or protecting data
        </div>
        <div className="centertext">
          click{" "}
          <a href={window.location} onClick={this.openUrl}>
            here
          </a>{" "}
          to learn more
        </div>
      </div>
    );
  }
}

export default Dashboard;
