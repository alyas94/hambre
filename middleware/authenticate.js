const user = require("../models").user;

const authenticate = (req, res, next) => {
  const token = req.header("tacoJwt");
  console.log("token");
  User.findByToken(token)
    .then(user => {
      if (!user) {
        res.status(401).send({ message: "No user found." });
      }
      req.user = user;
      req.token = token;
      next();
    })
    .catch(e => {
      res.status(401).send({ message: "Authentication failed" });
    });
};

module.exports = { authenticate };
