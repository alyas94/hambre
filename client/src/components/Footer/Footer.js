import React from "react";
import Typography from "@material-ui/core/Typography";
import LoveIcon from "./LoveIcon.png";

const footerStyle = {
  backgroundColor: "#666",
  fontSize: "20px",
  color: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "relative",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
};

function Footer({ children }) {
  return (
    <div>
      <div style={footerStyle}>
        {children}
        <Typography color="inherit" varient="subheading">
          ©Hambre. Made with
          <img src={LoveIcon} height="20" /> in Sacramento.
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
