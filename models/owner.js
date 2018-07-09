const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

//Owner Schema stuff
const ownerSchema = new Schema({
  truckName: { type: String, required: true },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  foodType: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: Array, default: [] },
  address: { type: String, required: false },

  truckActive: { type: Boolean, default: false },
});

// Used for encrypting the password
ownerSchema.pre("save", function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

ownerSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

ownerSchema.findByToken = token => {
  let decode;
  try {
    decode = jwt.verify(token, "secret");
    return ownerSchema.findOne({ _id: decode.id });
  } catch (e) {
    return Promise.reject();
  }
};

const Owners = mongoose.model("OwnerInfo", ownerSchema);

//   export Schema
module.exports = Owners;
