const LocationsInfo = require("../model/LocationsInfo");

// Menampilkan data lokasi
exports.home = async (req, res) => {
  try {
    const data_lokus = await LocationsInfo.find();  
    res.render("dashboard", { data_lokus });
  } catch (err) {
    console.error("Error fetching data: ", err);
    res.render("dashboard", { data_lokus: [] });
  }
};

// Mengedit data lokasi berdasarkan ID
exports.edit_data_lokus = async (req, res) => {
  const id = req.params.id;
  try {
    const data_lokus = await LocationsInfo.findOne({ _id: id }); // Mencari data berdasarkan ID
    if (data_lokus != null) {
      res.render("edit_data_lokus", { data_lokus });
    } else {
      throw new Error('Data tidak ditemukan');
    }
  } catch (err) {
    console.error("Error: ", err);
    res.redirect("/auth/logout");
  }
};

// Menampilkan halaman untuk menambah data lokasi
exports.tambah_data_lokus = async (req, res) => {
  res.render("create_data_lokus");
};
