import React from "react";

export const HambreLogo = props => {
  const styles = {
    logo: {
      height: "5vh",
      width: "auto",
    },
  };
  return (
    <div>
      <img
        src={require("../../img/HambreLogo.png")}
        style={styles.logo}
        alt="Hambre"
      />
    </div>
  );
};
