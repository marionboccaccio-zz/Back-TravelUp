const mongoose = require("mongoose"); 

const Schema = mongoose.Schema;

const userSchema = new Schema ({
  _id:ObjectId,
  countryOfResidence: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  trip: [{
    Type : Schema.Types.ObjectId,
    Ref : “Travel”}]

})

