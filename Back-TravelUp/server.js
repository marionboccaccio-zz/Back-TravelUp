require("dotenv").config();
require("./config/dbConfig.js");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors("*"));

app.listen(process.env.PORT, () => {
  console.log("Server listening on port http://localhost:", process.env.PORT);
});
