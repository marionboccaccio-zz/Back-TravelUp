require("dotenv").config();
require("./config/dbConfig.js");
require("./config/passport");

const express = require("express");
const passport = require("passport");
const cors = require("cors");
const app = express();
const session = require("express-session"); //sessions make data persist between http calls

app.use(express.json());
/*
Create a session middleware with the given options.
Note:  Session data is not saved in the cookie itself, just the session ID. 
Session data is stored server-side.
*/
app.use(
  session({
    cookie: { secure: false, maxAge: 4 * 60 * 60 * 1000 }, // 4 hours
    resave: true,
    saveUninitialized: true,
    secret: process.env.SECRET_SESSION
  })
);

const corsOptions = {
  origin: [process.env.FRONTEND_URL],
  /* credentials : Configures the Access-Control-Allow-Credentials CORS header. Set to true to pass the header, otherwise it is omitted  https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials */
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// passport init : these rules MUST set be after session setup (lines above)
app.use(passport.initialize());
app.use(passport.session());

app.use(function isLoggedIn(req, res, next) {
  req.user = {
    _id: "5def6d2514be8042fa479787",
    avatar: "https://cdn.onlinewebfonts.com/svg/img_258083.png",
    firstName: "marion/parina",
    lastName: "TravelUp TEam",
    email: "email@travelUp.com"
  };
  next();
});

app.get("/", (req, res) => {
  res.send("base route server");
});

app.use(require("./routes/itinerary"));
app.use(require("./routes/accomodation"));
app.use(require("./routes/transportation"));
app.use(require("./routes/activity"));
const authRouter = require("./routes/auth.js");

app.use(authRouter);

app.listen(process.env.PORT, () => {
  console.log("Server listening on port http://localhost:" + process.env.PORT);
});
