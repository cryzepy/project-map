const mongoose = require("mongoose");

// Skema untuk Koleksi LocationsInfo
const LocationsInfoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, maxlength: 255 },
    google_maps_link: { type: String, required: true }, // Text bisa diwakili dengan String di MongoDB
    contact_name: { type: String, maxlength: 255 },
    contact_phone: { type: String, maxlength: 20 },
    instagram: { type: String, maxlength: 255 },
    next_page_content: { type: String, required: true },
    latitude: { type: Number, required: true }, // Decimal bisa diwakili oleh Number di MongoDB
    longitude: { type: Number, required: true },
    images: { type: [String], required: false }
  },
  { collection: "locations_info", timestamps: false }
); // timestamps: false agar tidak otomatis menambahkan createdAt & updatedAt

// Buat Model dari Skema
const LocationsInfo = mongoose.model("LocationsInfo", LocationsInfoSchema);

module.exports = LocationsInfo;
