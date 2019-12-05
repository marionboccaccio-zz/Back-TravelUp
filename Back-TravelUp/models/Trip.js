const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tripSchema = new Schema([
  {
    user: {
      Type: Schema.Types.ObjectId,
      Ref: "User"
    },
    title: String, //est-ce ici qu'on limite le nb de caractères?
    description: String,
    steps: [
      {
        country: String,
        city: String,
        startDate: Date,
        endDate: Date
      }
    ]
  }
]);

const tripModel = mongoose.model("Trip", tripSchema);

module.exports = tripModel;
