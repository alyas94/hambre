import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

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
        type: "Coffee",
        description: "Great coffee, questionable pastries.",
        position: {
          lat: 38.5639,
          lng: -121.4724,
        },
      },
      {
        name: "Miyagi Bar & Sushi",
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
    if (this.state.centerLat === "" && this.state.centerLng === "") {
      this.getCurrentLocation();
    }
    // let athing = this.props;
    // console.log(athing);
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
      this.updateBounds(bounds);
      //   console.log(this.mapBounds);
    });
  };

  updateBounds = newBounds => {
    this.mapBounds = {
      northBound: newBounds.f.f,
      southBound: newBounds.f.b,
      westBound: newBounds.b.b,
      eastBound: newBounds.b.f,
    };
  };

  getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      this.setState({
        centerLat: position.coords.latitude,
        centerLng: position.coords.longitude,
      });
    });
  };
  render() {
    return (
      <Map
        google={this.props.google}
        style={{ height: "70vh", width: "70vw" }}
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
              name={truck.name}
              type={truck.type}
              description={truck.description}
              position={truck.position}
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
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAiP0Yq6i8AvrDFTcEpCI-FbQQGc8M02vo",
})(MapContainer);
