const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: ObjectId, // ça on ne le met pas, c'est bien ça?
  countryOfResidence: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  trip: [
    {
      Type: Schema.Types.ObjectId,
      Ref: ""
    }
  ]
});

console.log("juste pour faire le commit ");
const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
