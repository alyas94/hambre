import React, { Component } from "react";

class MapSidebarItem extends Component {
  state = {
    descHidden: true,
  };
  showMSDescription = () => {
    this.setState({
      descHidden: !this.state.descHidden,
    });
  };
  render() {
    return (
      <li
        onMouseOver={this.showMSDescription}
        onMouseOut={this.showMSDescription}
        className="viewListItem"
        id={this.props.id}
      >
        <h4 className="truckName mt-2">
          <strong>{this.props.name}</strong>
        </h4>
        {this.state.descHidden === true ? (
          <p>Type: {this.props.type}</p>
        ) : (
          <p>Description: {this.props.description}</p>
        )}
      </li>
    );
  }
}

export default MapSidebarItem;
