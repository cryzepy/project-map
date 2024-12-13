const mongoose = require("mongoose");

// Skema untuk Koleksi LocationsInfo
const LocationsInfoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, maxlength: 255 },
    google_maps_link: { type: String, required: true }, 
    contact_name: { type: String, maxlength: 255 },
    contact_phone: { type: String, maxlength: 20 },
    instagram: { type: String, maxlength: 255 },
    next_page_content: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    link_gambar: { type: String, required: false }
  },
  { collection: "locations_info", timestamps: false }
); 

const LocationsInfo = mongoose.model("LocationsInfo", LocationsInfoSchema);

module.exports = LocationsInfo;
