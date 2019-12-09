const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const activitySchema = new Schema({
  description: String,
  adress: String,
  coordinates: Number,
  date: Date,
  itineraryId: {
    type: Schema.Types.ObjectId,
    ref: "Itinerary"
  }
});

const activityModel = mongoose.model("Activity", activitySchema);

module.exports = activityModel;
