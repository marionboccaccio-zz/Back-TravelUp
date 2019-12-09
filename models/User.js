const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,

  avatar: {
    type: String,
    default: "https://cdn.onlinewebfonts.com/svg/img_258083.png"
  }
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
