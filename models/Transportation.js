const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transportationSchema = new Schema({
  transport: {
    type: String,
    enum: ["flight", "train", "bus", "car", "foot"]
  },
  startPoint: String,
  endPoint: String,
  date: Date,
  itineraryId: {
    type: Schema.Types.ObjectId,
    ref: "Itinerary"
  }
});

const transportationModel = mongoose.model(
  "Transportation",
  transportationSchema
);

module.exports = transportationModel;
