const LocationsInfo = require("../model/LocationsInfo");

exports.getDataLocations = async (req, res) => {
  try {
    const data = await LocationsInfo.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
