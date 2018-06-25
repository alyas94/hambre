const router = require("express").Router();
const ownerController = require("../../controller/ownerController"); //this links to the controller for the owner schema

//this is for the entire owners collection
router
  .route("/")
  .get(ownerController.findAll) //this is for finding everyone that is an owner
  .get(ownerController.findByLocation) //this is for finding all owners within a given radius. this will need to talk to the userController someohow to find out where they are in relation to the trucks
  .post(ownerController.create); //this is for createing a new owner

router
  .route("/:id")
  .delete(ownerController.deleteOnwer) //this will allow an owner to delte their account
  .post(ownerController.newLocation) //this should create a new location for the owner, like the new notes that we did for the article scraper hw
  .update(ownerController.updateInformation); //this should allow the owner to update information in the database like menu, hours, etc. we might not need this for awhile

module.exports = router;
