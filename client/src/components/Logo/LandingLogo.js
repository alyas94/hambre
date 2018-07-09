import React, { Component } from "react";
import ReactDOM from "react-dom";

const styles = {
  logo: {
    marginTop: "20vh",
    height: "40vh",
    width: "auto",
  },
};

export class LandingLogo extends Component {
  // function scrollToBottom(id){
  //     var div = document.getElementById(id);
  //     div.scrollTop = div.scrollHeight - div.clientHeight;
  //  }

  scrollToMap = () => {
    console.log("click");
    let mapDiv = ReactDOM.findDOMNode(
      document.getElementById("map-component-div")
    );
    // console.log(mapDiv);
    mapDiv.scrollIntoView({ behavior: "smooth" }, true);
    // mapDiv.scrollTop;
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
