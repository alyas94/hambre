import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { classnames } from "../../helpers";
import SearchIcon from "@material-ui/icons/Search";
import API from "../../utils/ownerAPI";

const style = {
  height: "70vh",
  width: "70vw",
  overflow: "auto",
  margin: "15vh 0px 0px 26vw",
  Zindex: "50",
  // boxShadow: "-3px 5px 3px #dddddd",
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    centerLat: "",
    centerLng: "",
    currentLocation: {},
    address: "",
    trucks: [],
  };

  componentDidMount() {
    this.truckChecker = setInterval(() => {
      this.loadVenues();
      console.log("checking trucks");
    }, 10000);
    this.sessionStorageRedefine();
    if (this.state.centerLat === "" && this.state.centerLng === "") {
      this.getCurrentLocation();
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

  sessionStorageRedefine = () => {
    var originalSetItem = sessionStorage.setItem;

    sessionStorage.setItem = function() {
      var event = new Event("itemInserted");
      originalSetItem.apply(this, arguments);
      document.dispatchEvent(event);
    };

    var storageHandler = function(e) {
      console.log("sessionStorage changed!");
    };

    document.addEventListener("itemInserted", storageHandler, false);
  };

  // componentDidUpdate() {
  //   // this.centerMoved(mapProps, map);
  //   console.log("component updated!!");
  // }

  onMarkerClick = (props, marker, e) => {
    console.log(props);
    console.log(marker);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      centerLat: props.position.lat,
      centerLng: props.position.lng,
    });
  };

  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
      // this.onInfoWindowClose();
    }
  };

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false,
    });

  mapBoundsChangeListener = (mapProps, map) => {
    const { google } = mapProps;
    google.maps.event.addListener(map, "idle", () => {
      console.log("idling");
      var bounds = map.getBounds();
      console.log(bounds);
      this.updateBounds(bounds);
      //   console.log(this.currentMapBouds);
      //   let someTrucks = this.state.trucks;
      //   this.trucksToList(someTrucks, this.currentMapBouds);
    });
  };

  updateBounds = newBounds => {
    var hambreCMB = {
      northBound: newBounds.f.f,
      southBound: newBounds.f.b,
      westBound: newBounds.b.f,
      eastBound: newBounds.b.b,
    };
    if (JSON.stringify(hambreCMB.northBound) !== "null") {
      sessionStorage.setItem("hambreCMB", JSON.stringify(hambreCMB));
      console.log(JSON.parse(sessionStorage.hambreCMB));
    }
  };

  //Centers the map on user's current location
  getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      var currentPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      console.log(currentPosition);
      this.setState({
        centerLat: position.coords.latitude,
        centerLng: position.coords.longitude,
        currentLocation: currentPosition,
      });
      this.loadVenues();
      console.log(this.state.currentLocation);
    });
  };

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng =>
        // console.log("Success", latLng);
        this.setState({
          address: "",
          centerLat: latLng.lat,
          centerLng: latLng.lng,
        })
      )
      .catch(error => console.error("Error", error));
  };

  handleCloseClick = () => {
    this.setState({
      address: "",
    });
  };

  render() {
    // let listItemsToRender = this.trucksToList(this.state.trucks, this.bounds);
    return (
      <div className="bg3" id="map-component-div">
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
          onError={this.handleError}
          shouldFetchSuggestions={this.state.address.length > 2}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps }) => {
            return (
              <div className="search-bar-container row">
                {/* <div className="search-icon-wrapper"> */}
                <SearchIcon className="search-icon mr-1" />
                {/* </div> */}
                <div className="search-input-container">
                  <input
                    {...getInputProps({
                      placeholder: "Choose map center...",
                      className: "search-input",
                    })}
                  />
                </div>
                {suggestions.length > 0 && (
                  <div className="autocomplete-container">
                    {suggestions.map(suggestion => {
                      const className = classnames("suggestion-item", {
                        "suggestion-item--active": suggestion.active,
                      });

                      return (
                        /* eslint-disable react/jsx-key */
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                          })}
                        >
                          <strong>
                            {suggestion.formattedSuggestion.mainText}
                          </strong>{" "}
                          <small>
                            {suggestion.formattedSuggestion.secondaryText}
                          </small>
                        </div>
                      );
                      /* eslint-enable react/jsx-key */
                    })}
                  </div>
                )}
                <button
                  className="btn btn-dark ml-2 current-location-btn"
                  onClick={this.getCurrentLocation}
                >
                  Get Current Location{" "}
                </button>
              </div>
            );
          }}
        </PlacesAutocomplete>
        <Map
          className="border"
          google={this.props.google}
          style={style}
          center={{
            lat: this.state.centerLat,
            lng: this.state.centerLng,
          }}
          zoom={14}
          onReady={this.mapBoundsChangeListener}
          onClick={this.onMapClicked}
        >
          <Marker
            onClick={this.onMarkerClick}
            name="User"
            type=" "
            description="Current user location"
            position={this.state.currentLocation}
          />
          {this.state.trucks.length
            ? this.state.trucks.map(truck => {
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
              })
            : null}
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
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API,
})(MapContainer);
