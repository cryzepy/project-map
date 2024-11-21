const { DataTypes } = require("sequelize")
const sequelize = require("../config/db")

const LocationsInfo = sequelize.define("locations_info", {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING(255), allowNull: false },
    google_maps_link: { type: DataTypes.TEXT, allowNull: false },
    contact_name: { type: DataTypes.STRING(255), allowNull: true },
    contact_phone: { type: DataTypes.STRING(20), allowNull: true },
    instagram: { type: DataTypes.STRING(255), allowNull: true },
    next_page_content: { type: DataTypes.TEXT, allowNull: false },
    latitude: { type: DataTypes.DECIMAL(10,8), allowNull: false },
    longitude: { type: DataTypes.DECIMAL(11,8), allowNull: false },
}, { tableName: "locations_info", timestamps: false });

module.exports = LocationsInfo