const mongoose = require("mongoose");
const uuid = require("uuid");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email:String,
  pin: String,
  city: String,
  created: { type: Date, default: Date.now },
  modified: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);
