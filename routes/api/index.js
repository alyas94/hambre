const router = require("express").Router();
const userRoutes = require("./userRoutes");
const ownerRoutes = require("./ownerRoutes");

//This is wehre all routes for "/api/user" will go
router.use("/user", userRoutes);

//This is wehre all routes for "/api/owner" will go
router.use("/owner", ownerRoutes);

module.exports = router;
