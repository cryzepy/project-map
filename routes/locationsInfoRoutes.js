const express = require("express")
const router = express.Router()
const locationController = require("../controller/locationsInfoController")

router.get("/", locationController.getDataLocations)

module.exports = router