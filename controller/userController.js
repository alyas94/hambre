const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  findAll: function(req, res) {
    db.Users.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Users.create(
      Object.assign(req.body, {
        password: bcrypt.hashSync(req.body.password, 10),
      })
    )
      .then(user => {
        //console.log(user);
        const tacoJwt = jwt.sign(
          { email: req.body.email },
          process.env.CRYPTO_KEY
        );
        console.log(tacoJwt);
        res.status(200).send({ tacoJwt, findUser }); //probably going to need to add a route for finding a specific user
      })
      .catch(err => res.status(422).json(err));
  },

  deleteUser: function(req, res) {
    db.Users.deleteOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addFavorites: function(req, res) {
    console.log(req.body);
    db.Users.updateOne(
      { _id: req.params.id },
      {
        $push: {
          favorites: [req.body],
        },
      }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getFavorites: function(req, res) {
    console.log(req.body);
    db.Users.findOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getUser: function(req, res) {
    db.Users.findOne({ _id: req.params.id })
      .then(user => res.status(200).send(user))
      .catch(err => res.status(404).send(err));
  },
};
