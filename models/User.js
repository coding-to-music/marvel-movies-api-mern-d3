const mongoose = require("mongoose");

const User = mongoose.model("User", {
  email: { type: String, unique: true },
  token: String, // for authentification
  hash: String,
  salt: String,

  // The objet `account` stock non sensible infos
  account: {
    username: { type: String, required: true },
    phone: { type: String },
  },
  favorites: { type: Array },
});

module.exports = User;
