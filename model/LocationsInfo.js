// const { DataTypes } = require("sequelize")
// const sequelize = require("../config/db")

// const LocationsInfo = sequelize.define("locations_info", {
//     id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
//     name: { type: DataTypes.STRING(255), allowNull: false },
//     google_maps_link: { type: DataTypes.TEXT, allowNull: false },
//     contact_name: { type: DataTypes.STRING(255), allowNull: true },
//     contact_phone: { type: DataTypes.STRING(20), allowNull: true },
//     instagram: { type: DataTypes.STRING(255), allowNull: true },
//     next_page_content: { type: DataTypes.TEXT, allowNull: false },
//     latitude: { type: DataTypes.DECIMAL(10,8), allowNull: false },
//     longitude: { type: DataTypes.DECIMAL(11,8), allowNull: false },
// }, { tableName: "locations_info", timestamps: false });

// module.exports = LocationsInfo

const mongoose = require("mongoose");

// Skema untuk Koleksi LocationsInfo
const LocationsInfoSchema = new mongoose.Schema({
    name: { type: String, required: true, maxlength: 255 },
    google_maps_link: { type: String, required: true }, // Text bisa diwakili dengan String di MongoDB
    contact_name: { type: String, maxlength: 255 },
    contact_phone: { type: String, maxlength: 20 },
    instagram: { type: String, maxlength: 255 },
    next_page_content: { type: String, required: true },
    latitude: { type: Number, required: true }, // Decimal bisa diwakili oleh Number di MongoDB
    longitude: { type: Number, required: true },
}, { collection: "locations_info", timestamps: false }); // timestamps: false agar tidak otomatis menambahkan createdAt & updatedAt

// Buat Model dari Skema
const LocationsInfo = mongoose.model("LocationsInfo", LocationsInfoSchema);

module.exports = LocationsInfo;
