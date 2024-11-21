// const { Sequelize } = require("sequelize")

// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
//     host: process.env.DB_HOST,
//     dialect: "mysql"
// })

// module.exports = sequelize


const mongoose = require("mongoose");

// Koneksi ke MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Keluar jika gagal terhubung
    }
};

module.exports = connectDB;