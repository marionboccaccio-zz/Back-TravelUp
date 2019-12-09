const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: ObjectId,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  itineraries: [
    {
      Type: Schema.Types.ObjectId,
      Ref: "Itinerary"
    }
  ]
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
