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