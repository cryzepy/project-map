const express = require('express')

const app = express()
const PORT = process.env.PORT | 3010

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.set("view engine", "ejs")
app.set("views", "./views")

const adminRoutes = require("./routes/adminRoutes")
const authRoutes = require("./routes/authRoutes")
const publicRoutes = require("./routes/publicRoutes")
const locationsInfoRoutes = require("./routes/locationsInfoRoutes")

app.use("/admin", adminRoutes)
app.use("/auth", authRoutes)
app.use("/getdatalocation", locationsInfoRoutes)
app.use("/", publicRoutes)


app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})