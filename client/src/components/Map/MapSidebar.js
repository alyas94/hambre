import React, { Component } from "react";

const styles = {
  div: {
    float: "right",
    width: "20vw",
  },
};

class MapSidebar extends Component {
  state = {
    itemsToRender: [],
    trucks: [
      {
        name: "Temple Coffee",
        id: 1,
        type: "Coffee",
        description: "Great coffee, questionable pastries.",
        position: {
          lat: 38.5639,
          lng: -121.4724,
        },
      },
      {
        name: "Miyagi Bar & Sushi",
        id: 2,
        type: "Japanese",
        description: "mediocre japanese food!",
        position: {
          lat: 38.5734,
          lng: -121.4022,
        },
      },
    ],
  };
  componentDidMount() {
    this.sessionStorageListener();
  }

  sessionStorageListener = () => {
    var storageHandler = function(e) {
      let newMapBounds = sessionStorage.getItem("hambreCMB");
      console.log(JSON.parse(newMapBounds));
      // console.log("sessionStorage changed!");
    };

    document.addEventListener("itemInserted", storageHandler, false);
  };

  render() {
    return (
      <ul style={styles.div} classname="list-group">
        {this.props.children}
      </ul>
    );
  }
}

export default MapSidebar;
