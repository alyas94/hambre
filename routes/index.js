const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//All routes from "/api" will go here first. Mathces with anything "/api"
router.use("/api", apiRoutes);

//If the api is not used, then go to the react app at index.html. This will only work after running yarn build
// router.use(function(req, res) {
//   res.sendFile(path.join(_dirname, "../client/build/index.html"));
// });

module.exports = router;
