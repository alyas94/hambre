const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Owners.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    db.Owners.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteOwner: function(req, res) {
    db.Owners.deleteOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  newLocation: function(req, res) {
    console.log(req.body);
    db.Owners.insertOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateInformation: function(req, res) {
    console.log(req.body);
    db.Owners.updateOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByLocation: function(req, res) {
    console.log(req.body);
    db.Owners.find(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByType: function(req, res) {
    console.log(req.body);
    db.Owners.find({ foodtype: req.params.foodtype })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
