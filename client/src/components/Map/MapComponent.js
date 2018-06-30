import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// import { MapSidebar } from "./MapSidebar";
// import MapSidebarItem from "./MapSidebarItem";
// import MapSidebarItem from "MapSidebar/MapSidebarItem";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    centerLat: "",
    centerLng: "",
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
    this.sessionStorageTest();
    if (this.state.centerLat === "" && this.state.centerLng === "") {
      this.getCurrentLocation();
      //   this.updateBounds();
      //   this.listItemsToRender(this.state.trucks, this.currentMapBouds);
    }
    // let athing = this.props;
    // console.log(athing);
  }

  sessionStorageTest() {
    var originalSetItem = sessionStorage.setItem;

    sessionStorage.setItem = function() {
      var event = new Event("itemInserted");
      document.dispatchEvent(event);

      originalSetItem.apply(this, arguments);
    };

    var storageHandler = function(e) {
      console.log("sessionStorage changed!");
    };

    document.addEventListener("itemInserted", storageHandler, false);
  }

  componentDidUpdate() {
    // this.centerMoved(mapProps, map);
    console.log("component updated!!");
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      centerLat: props.position.lat,
      centerLng: props.position.lng,
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false,
    });

  fuckYouGoogleApi = (mapProps, map) => {
    const { google } = mapProps;
    google.maps.event.addListener(map, "idle", () => {
      var bounds = map.getBounds();
      console.log(bounds);
      this.updateBounds(bounds);
      //   console.log(this.currentMapBouds);
      //   let someTrucks = this.state.trucks;
      //   this.trucksToList(someTrucks, this.currentMapBouds);
    });
  };

  updateBounds = newBounds => {
    let hambreCMB = {
      northBound: newBounds.f.f,
      southBound: newBounds.f.b,
      westBound: newBounds.b.f,
      eastBound: newBounds.b.b,
    };
    sessionStorage.setItem("hambreCMB", JSON.stringify(hambreCMB));
    console.log(JSON.parse(sessionStorage.hambreCMB));
  };

  trucksToList = (trucks, bounds) => {
    let allTrucks = trucks;
    let trucksToRender = [];
    console.log(bounds);
    for (var i = 0; i < allTrucks.length; i++) {
      if (
        allTrucks[i].position.lat < bounds.northBound &&
        allTrucks[i].position.lat > bounds.southBound &&
        allTrucks[i].position.lng < bounds.eastBound &&
        allTrucks[i].position.lng > bounds.westBound
      ) {
        trucksToRender.push(allTrucks[i]);
      }
    }
    this.listItemsToRender = trucksToRender;
  };

  //Centers the map on user's current location
  getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      this.setState({
        centerLat: position.coords.latitude,
        centerLng: position.coords.longitude,
      });
    });
  };

  //for testing purposes
  logThatShit = item => {
    console.log(item);
  };
  render() {
    // let listItemsToRender = this.trucksToList(this.state.trucks, this.bounds);
    return (
      //   <div>
      //     <MapSidebar
      //       listItemsToRender={this.listItemsToRender}
      //       onLoad={this.logThatShit(this.listItemsToRender)}
      //     >
      //       {this.props.listItemsToRender ? (
      //         this.props.listItemsToRender.map(truck => {
      //           return (
      //             <MapSidebarItem
      //               id={truck.id}
      //               name={truck.name}
      //               type={truck.type}
      //             />
      //           );
      //         })
      //       ) : (
      //         <p>no current items </p>
      //       )}
      //     </MapSidebar>
      <Map
        google={this.props.google}
        style={{ height: "70vh", width: "70vw", float: "right" }}
        center={{
          lat: this.state.centerLat,
          lng: this.state.centerLng,
        }}
        zoom={14}
        onReady={this.fuckYouGoogleApi}
        onClick={this.onMapClicked}
      >
        {this.state.trucks.map(truck => {
          return (
            <Marker
              onClick={this.onMarkerClick}
              key={truck.id}
              id={truck.id}
              name={truck.name}
              type={truck.type}
              description={truck.description}
              position={truck.position}
              //added custom icon for food trucks
              icon={{
                url: "../../../truck-catering.png",
                anchor: new this.props.google.maps.Point(32, 32),
                scaledSize: new this.props.google.maps.Size(40, 40),
              }}
            />
          );
        })}
        <InfoWindow
          onClose={this.onInfoWindowClose}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
            <h2>{this.state.selectedPlace.type}</h2>
            <p>{this.state.selectedPlace.description}</p>
          </div>
        </InfoWindow>
      </Map>
      //   </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAiP0Yq6i8AvrDFTcEpCI-FbQQGc8M02vo",
})(MapContainer);
