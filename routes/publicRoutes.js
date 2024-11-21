const express = require("express");
const router = express.Router();
const publicController = require("../controller/publicController");
const multer = require("multer");
const path = require("path");

router.get("/maps", publicController.maps);
router.get("/detail/:id", publicController.detail);
router.get("/", publicController.maps);
router.get("/*", publicController.errorPage);

module.exports = router;
