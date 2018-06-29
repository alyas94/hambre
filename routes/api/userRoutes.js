const router = require("express").Router();
const userController = require("../../controller/userController");

router //this is for all the entries in the "user" database
  .route("/")
  .get(userController.findAll) //this will let us find all the users of the app if need be. We might not need this for awhile
  .post(userController.create); //this is to create a new user

router
  .route("/:id") //this is for specific users based on their assigned id
  .delete(userController.deleteUser) //this is so users can delete themselves
  .put(userController.addFavorites) //this is where they will add favories. We might need to do the samething as with the article scraper where each user has many favories like each article could have many notes
  .get(userController.getFavorites);

module.exports = router;
