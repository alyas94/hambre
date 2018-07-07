import React, { Component } from "react";

const styles = {
  logo: {
    marginTop: "20vh",
    height: "40vh",
    width: "auto",
  },
};

export class LandingLogo extends Component {
  scrollToMap = () => {
    console.log("click");
    const mapTop = document.getElementById("map-component-div");
    mapTop.scrollTop;
  };
  render() {
    return (
      <div className="row">
        <img
          className="mx-auto landing-logo"
          src={require("../../img/HambreLogo.png")}
          style={styles.logo}
          alt="Hambre"
          onClick={this.scrollToMap}
        />
      </div>
    );
  }
}
