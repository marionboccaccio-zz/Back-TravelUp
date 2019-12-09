require("dotenv").config();
require("./config/dbConfig.js");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors("*"));

app.use("/itineraries", require("./routes/itinerary"));
app.use("/accomodations", require("./routes/accomodation"));
app.use("/transportations", require("./routes/transportation"));
app.use("/activities", require("./routes/activity"));

function isLoggedIn(req, res, next) {
  req.session.currentUser = "fuiehfuaiufheaifafafaefafa";
}

app.use(isLoggedIn);

app.listen(process.env.PORT, () => {
  console.log("Server listening on port http://localhost:", process.env.PORT);
});
