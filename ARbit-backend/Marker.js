const mongoose = require("mongoose");

const MarkerSchema = new mongoose.Schema({
  markerId: { type: String, required: true, unique: true }, // Unique marker ID
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String }, // Building or campus location
  coordinates: { type: [Number], required: true }, // Lat/Long
});

module.exports = mongoose.model("CampusMarker", MarkerSchema);
