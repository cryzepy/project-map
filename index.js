const express = require('express')
const session = require("express-session");
const cors = require("cors")

require("dotenv").config()
require("./config/db")()

const app = express()
const PORT = process.env.PORT || 3010

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.static("public"))
app.use(
    session({
      secret: process.env.SECRET_KEY_FOR_SESSION, // Ganti dengan kunci rahasia Anda
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 60000 * 75 }, // Cookie akan kedaluwarsa dalam 75 menit
    })
  );
  

app.set("view engine", "ejs")
app.set("views", "./views")

const adminRoutes = require("./routes/adminRoutes")
const authRoutes = require("./routes/authRoutes")
const publicRoutes = require("./routes/publicRoutes")
const dataLokusRoutes = require("./routes/dataLokusRoutes")

app.use("/api/data_lokus", dataLokusRoutes)
app.use("/admin", adminRoutes)
app.use("/auth", authRoutes)
app.use("/", publicRoutes)



app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})