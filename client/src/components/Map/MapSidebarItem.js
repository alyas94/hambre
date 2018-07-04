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
        <h2 className="truckName">
          <strong>{this.props.name}</strong>
        </h2>
        {this.state.descHidden === true ? (
          <h4>Type: {this.props.type}</h4>
        ) : (
          <h4>Description: {this.props.description}</h4>
        )}
      </li>
    );
  }
}

export default MapSidebarItem;
