require("dotenv").config();
require("./config/dbConfig.js");
require("./config/passport");

const express = require("express");
const cors = require("cors");
const app = express();
const authRouter = require("./routes/auth.js");

app.use(express.json());
app.use(cors("*"));

app.use(function isLoggedIn(req, res, next) {
  req.user = {
    _id: "5dee59112d10be266a0a14ac"
  };
});

app.use("/itineraries", require("./routes/itinerary"));
app.use("/accomodations", require("./routes/accomodation"));
app.use("/transportations", require("./routes/transportation"));
app.use("/activities", require("./routes/activity"));
app.use(require("./routes/auth"));

// app.use(isLoggedIn);

app.listen(process.env.PORT, () => {
  console.log("Server listening on port http://localhost:", process.env.PORT);
});
