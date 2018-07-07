const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Owners.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByLocation: function(req, res) {
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
    db.Owners.update(
      { _id: req.params.id },
      {
        $push: {
          // pushing location from req.body into the location array
          // $position 0 puts new location to 1st spot in the index
          location: { $each: [req.body], $position: 0 },
        },
      }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateInformation: function(req, res) {
    console.log(req.body);
    db.Owners.updateOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  currentLocation: function(req, res) {
    db.Owners.find({ _id: req.params.id }, { location: { $slice: 1 } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByType: function(req, res) {
    console.log(req.body);
    db.Owners.find({ foodType: req.params.foodtype })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  trucksActive: function(req, res) {
    console.log(req.body);
    db.Owners.updateOne({ _id: req.params.id }, { truckActive: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  trucksInactive: function(req, res) {
    console.log(req.body);
    db.Owners.updateOne({ _id: req.params.id }, { truckActive: false })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findActive: function(req, res) {
    console.log(req.body);
    db.Owners.find({ truckActive: true }, { location: { $slice: 1 } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
