const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema([
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    title: String, //est-ce ici qu'on limite le nb de caractères?
    description: String,
    steps: [
      {
        country: String,
        city: String,
        transportation: {
          type: Schema.Types.ObjectId,
          ref: "Transportation"
        },
        accomodation: {
          type: Schema.Types.ObjectId,
          ref: "Accomodation"
        },
        activity: {
          type: Schema.Types.ObjectId,
          ref: "Activity"
        },
        startDate: Date,
        endDate: Date
      }
    ]
  }
]);

const tripModel = mongoose.model("Trip", tripSchema);

module.exports = tripModel;
