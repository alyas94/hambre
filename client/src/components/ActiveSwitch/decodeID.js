const jwt = require("jsonwebtoken");

const decoder = () => {
  var decodedID = jwt.decode(localStorage.tacoJwt.id);
  console.log("Users id: " + decodedID);
};

export default decoder.DecodedID;
