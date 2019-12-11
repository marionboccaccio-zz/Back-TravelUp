const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accomodationSchema = new Schema({
  name: String,
  address: String,
  bookingRef: String,
  checkIn: Date,
  checkOut: Date,
  itineraryId: {
    type: Schema.Types.ObjectId,
    ref: "Itinerary"
  }
});

const accomodationModel = mongoose.model("Accomodation", accomodationSchema);

module.exports = accomodationModel;
