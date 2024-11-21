const express = require("express")
const router = express.Router()
const homeController = require("../controller/dashboardController")

router.get("/login", (req, res) => {
    res.render("login")
})

router.get("/register", (req, res) => {
    res.render("register")
})

router.get("/dashboard", homeController.home)


module.exports = router