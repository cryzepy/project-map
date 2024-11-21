const { DataTypes } = require("sequelize")
const sequelize = require("../config/db")

const User = sequelize.define("User", {
    username: { type: DataTypes.STRING, allowNull: false, unique: true, primaryKey: true },
    password: { type: DataTypes.STRING, allowNull: false }
}, { tableName: "user", timestamps: false })

module.exports = User