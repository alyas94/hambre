import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  state = {
    centerLat: 38.5727,
    centerLng: -121.4679,
  };
  componentDidMount() {
    this.getCurrentLocation();
    let athing = this.props;
    console.log(athing);
  }

  componentDidUpdate() {
    // this.centerMoved(mapProps, map);
    console.log("component updated!!");
  }

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
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAiP0Yq6i8AvrDFTcEpCI-FbQQGc8M02vo",
})(MapContainer);
