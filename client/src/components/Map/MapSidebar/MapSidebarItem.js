import React from "react";

const styles = {
  div: {
    width: "20vw",
  },
};

export const MapSidebarItem = props => (
  <div style={styles.div} className="viewListItem" id={props.id}>
    <h2 className="truckName">
      <strong>{props.name}</strong>
    </h2>
    <h4>Type: {props.type}</h4>
  </div>
);
