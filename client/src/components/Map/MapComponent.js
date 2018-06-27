import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  state = {
    centerLat: 38.5727,
    centerLng: -121.4679,
    northBound: "",
    southBound: "",
    eastBound: "",
    westBound: "",
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

  fuckYouGoogleApi(mapProps, map) {
    const { google } = mapProps;
    google.maps.event.addListener(map, "idle", function() {
      var bounds = map.getBounds();
      //   var bounds = { ne: bou.getNorthEast(), sw: bou.getSouthWest() };
      console.log(bounds);
      console.log(bounds.b.b);
      //   this.setState({
      var currentBounds = {
        northBound: bounds.f.f,
        southBound: bounds.f.b,
        westBound: bounds.b.b,
        eastBound: bounds.b.f,
      };
      console.log(JSON.stringify(currentBounds));
      //   });

      //   console.log(map.getBounds());
      //   var bounds = map.getBounds();
      //   var ne = bounds.getNorthEast(); // LatLng of the north-east corner
      //   var sw = bounds.getSouthWest(); // LatLng of the south-west corder
      //   var nw = new google.maps.LatLng(ne.lat(), sw.lng());
      //   var se = new google.maps.LatLng(sw.lat(), ne.lng());
      //   console.log(ne);
      //   console.log(sw);
      //   console.log(nw);
      //   console.log(se);
    });
  }

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
