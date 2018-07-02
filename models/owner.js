const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Owner Schema stuff
const ownerSchema = new Schema({
  truckName: { type: String, required: true },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    required: true,
  },
  foodType: { type: String, required: true },
  location: { type: Array, default: [] },

  truckActive: { type: Boolean, default: false },
});

const Owners = mongoose.model("OwnerInfo", ownerSchema);

//   export Schema
module.exports = Owners;
