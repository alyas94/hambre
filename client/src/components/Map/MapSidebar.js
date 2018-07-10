import React, { Component } from "react";
import MapSidebarItem from "./MapSidebarItem";
import QueueAnim from "rc-queue-anim";
import API from "../../utils/ownerAPI";

const styles = {
  div: {
    margin: "7vh 3vw 0px 0px",
    height: "80vh",
    width: "26vw",
    zIndex: "100",
    overflow: "auto",
  },
};

class MapSidebar extends Component {
  state = {
    toDisplay: [],
    trucks: [],
  };
  componentDidMount = () => {
    this.loadVenues();
    this.truckChecker = setInterval(() => {
      this.loadVenues();
      console.log("checking trucks");
    }, 10000);
  };

  componentDidUpdate(prevState) {
    if (this.state.trucks !== prevState.trucks) {
      this.sessionStorageListener(this.state.trucks);
    }
  }

  componentWillUnmount() {
    clearInterval(this.truckChecker);
  }

  loadVenues = () => {
    API.activeTrucks()
      .then(res => {
        console.log(res);
        // this.setState({
        //   trucks: res.data,
        // console.log(res.data[0].truckName);
        var activeTrucks = [];
        for (var i = 0; i < res.data.length; i++) {
          activeTrucks.push({
            name: res.data[i].truckName,
            // console.log(res.data[i]._id);
            id: res.data[i]._id,
            // console.log(res.data[i].foodType);
            type: res.data[i].foodType,
            // console.log(res.data[i].description);
            description: res.data[i].description,
            // console.log(res.data[i].location[i]);
            position: res.data[i].location[0],
          });
        }

        console.log(JSON.stringify(activeTrucks));
        console.log(JSON.stringify(this.state.trucks));
        if (
          JSON.stringify(activeTrucks) !== JSON.stringify(this.state.trucks)
        ) {
          console.log("truck state updating!");
          this.setState({
            trucks: activeTrucks,
          });
        }
      })
      .catch(err => console.log(err));
  };

  sessionStorageListener = trucks => {
    var storageHandler = e => {
      let newMapBounds = JSON.parse(sessionStorage.getItem("hambreCMB"));
      console.log(newMapBounds);
      var toDisplay = [];
      for (var i = 0; i < trucks.length; i++) {
        if (trucks[i].position) {
          if (
            trucks[i].position.lat < newMapBounds.northBound &&
            trucks[i].position.lat > newMapBounds.southBound &&
            trucks[i].position.lng < newMapBounds.westBound &&
            trucks[i].position.lng > newMapBounds.eastBound
          ) {
            toDisplay.push(trucks[i]);
          }
        }
      }
      console.log(JSON.stringify(toDisplay));
      let control = JSON.stringify(this.state.toDisplay);
      console.log(control);
      if (JSON.stringify(toDisplay) === control) {
        console.log("state is the same");
      } else {
        console.log("toDisplay is updated");
        this.setState({
          toDisplay: toDisplay,
        });
      }
      // console.log("sessionStorage changed!");
    };

    document.addEventListener("itemInserted", storageHandler, false);
  };

  render() {
    return (
      <ul style={styles.div} className="sidebarList backgroundColor">
        <QueueAnim className="backgroundColor">
          {this.state.toDisplay.length ? (
            this.state.toDisplay.map((truck, props) => {
              return (
                <MapSidebarItem
                  key={truck.id}
                  id={truck.id}
                  name={truck.name}
                  type={truck.type}
                  description={truck.description}
                />
              );
            })
          ) : (
            <li className="viewListItem">
              <h4 className="mt-4">No trucks here</h4>
            </li>
          )}
        </QueueAnim>
      </ul>
    );
  }
}

export default MapSidebar;
