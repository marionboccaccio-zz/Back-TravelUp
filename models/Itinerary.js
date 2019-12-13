const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itinerarySchema = new Schema([
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    title: String, //est-ce ici qu'on limite le nb de caractères?
    description: String,
    startDate: Date,
    endDate: Date,
    steps: [
      {
        country: String,
        city: String,
        transportation: [
          {
            type: Schema.Types.ObjectId,
            ref: "Transportation"
          }
        ],
        accomodation: [
          {
            type: Schema.Types.ObjectId,
            ref: "Accomodation"
          }
        ],
        activity: [
          {
            type: Schema.Types.ObjectId,
            ref: "Activity"
          }
        ]
      }
    ],
    itineraryImage: {
      type: String,
      default:
        "https://res.cloudinary.com/parina/image/upload/v1576250829/travel-up/chris-hayashi-gbaeHydpgtE-unsplash_uudrwu.jpg"
    }
  }
]);

const itineraryModel = mongoose.model("Itinerary", itinerarySchema);

module.exports = itineraryModel;
