require("dotenv").config();
require("./config/dbConfig.js");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors("*"));

app.use("/api/itineraries", require("./routes/itinerary"));
app.use("/api/accomodations", require("./routes/accomodation"));
app.use("/api/transportations", require("./routes/transportation"));
app.use("/api/activities", require("./routes/activity"));

app.listen(process.env.PORT, () => {
  console.log("Server listening on port http://localhost:", process.env.PORT);
});
