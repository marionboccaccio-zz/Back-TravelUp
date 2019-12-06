const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accomodationSchema = new Schema({
  name: String,
  address: String,
  coordinates: { lat, lng },
  bookingRef: String,
  startDate: Date,
  endDate: Date,
  tripId: {
    type: Schema.Types.ObjectId,
    ref: "Trip"
  }
});

const accomodationtModel = mongoose.model("Accomodation", accomodationSchema);

module.exports = accomodationtModel;
