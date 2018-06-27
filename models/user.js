const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema model
const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    required: true,
  },
  favorites: { type: Array, default: [] },
  location: { type: String, required: false },
});

const Users = mongoose.model("UserInfo", userSchema);
//   export Schema

module.exports = Users;
