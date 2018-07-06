const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;
const jwt = require("jsonwebtoken");

// User Schema model
const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    required: true,
  },
  password: { type: String, required: true, select: false },
  favorites: { type: Array, default: [] },
});

// Used for encrypting the password
userSchema.pre("save", function(next) {
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

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.findByToken = token => {
  let decode;
  try {
    decode = jwt.verify(token, process.env.CRYPTO_KEY);
    return userSchema.find({ email: decode.email });
  } catch (e) {
    return Promise.reject();
  }
};
const Users = mongoose.model("UserInfo", userSchema);
//   export Schema

module.exports = Users;
