import React from "react";

const MapSidebarItem = props => (
  <li className="viewListItem" id={props.id}>
    <h2 className="truckName">
      <strong>{props.name}</strong>
    </h2>
    <h4>Type: {props.type}</h4>
  </li>
);

export default MapSidebarItem;
