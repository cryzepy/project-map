// const { DataTypes } = require("sequelize")
// const sequelize = require("../config/db")

// const User = sequelize.define("User", {
//     username: { type: DataTypes.STRING, allowNull: false, unique: true, primaryKey: true },
//     password: { type: DataTypes.STRING, allowNull: false }
// }, { tableName: "user", timestamps: false })

// module.exports = User

const mongoose = require("mongoose");

// Skema untuk koleksi User
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true }, // Set unique dan required untuk username
    password: { type: String, required: true } // Set required untuk password
}, { collection: "user", timestamps: false }); // Tidak menambahkan timestamps secara otomatis

// Buat model berdasarkan skema
const User = mongoose.model("User", UserSchema);

module.exports = User;
