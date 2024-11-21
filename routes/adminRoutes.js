const express = require("express")
const router = express.Router()
const homeController = require("../controller/dashboardController")
const { isAuthenticated } = require("../middleware/auth")

router.get("/login", (req, res) => {
    res.render("login")
})

router.get("/register", (req, res) => {
    res.render("register")
})

router.get("/dashboard", isAuthenticated ,homeController.home)

router.get("/dashboard/edit/:id", isAuthenticated , homeController.edit_data_lokus)
router.get("/dashboard/tambah", isAuthenticated , homeController.tambah_data_lokus)


module.exports = router