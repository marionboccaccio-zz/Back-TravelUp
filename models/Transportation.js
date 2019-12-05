const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transportationSchema = new Schema({
  transport: String,
  startPoint: { lat, lng },
  endPoint: { lat, lng },
  date: Date,
  tripId: {
    type: Schema.Types.ObjectId,
    ref: "Trip"
  }
});

const transportationModel = mongoose.model(
  "Transportation",
  transportationSchema
);

module.exports = transportationModel;
