const express = require("express")
const router = express.Router()
const dataLokusController = require("../controller/dataLokusController")

router.post("/delete/:id", dataLokusController.deleteDataLokus)
router.post("/edit/:id", dataLokusController.editDataLokus)
router.post("/tambah", dataLokusController.addDataLokus)

module.exports = router