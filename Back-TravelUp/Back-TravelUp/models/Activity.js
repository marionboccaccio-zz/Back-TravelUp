const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const activitySchema = new Schema({
  description: String,
  adress: String,
  coordinates: { lat, lng },
  date: Date,
  tripId: {
    type: Schema.Types.ObjectId,
    ref: "Trip"
  }
});

const activityModel = mongoose.model("Activity", activitySchema);

module.exports = activityModel;
