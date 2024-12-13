const LocationsInfo = require("../model/LocationsInfo");
const { saveImagesAndLinks } = require("../helpers/saveImagesAndLinks");
const {
  getDataImagesFromClient,
} = require("../helpers/getDataImagesFromClient");

// Menambahkan data lokasi
exports.addDataLokus = async (req, res) => {
  const {
    name,
    google_maps_link,
    contact_name,
    contact_phone,
    instagram,
    next_page_content,
    latitude,
    longitude,
    link_gambar,
  } = req.body;

  try {
    const newData = await LocationsInfo.create({
      name,
      google_maps_link,
      contact_name,
      contact_phone,
      instagram,
      next_page_content,
      latitude,
      longitude,
      link_gambar,
    });

    id = newData.id;
  } catch (err) {
    console.log("Gagal menambahkan data:", err);
  } finally {
    res.redirect("/admin/dashboard");
  }
};

// Menghapus data lokasi
exports.deleteDataLokus = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteCount = await LocationsInfo.deleteOne({ _id: id });

    if (deleteCount.deletedCount === 1) {
      console.log("Data berhasil dihapus");
    } else {
      console.log("Data tidak ditemukan untuk dihapus");
    }
  } catch (err) {
    console.log("Gagal menghapus data:", err);
  } finally {
    res.redirect("/admin/dashboard");
  }
};

// Mengedit data lokasi
exports.editDataLokus = async (req, res) => {
  const { id } = req.params;

  const {
    name,
    google_maps_link,
    contact_name,
    contact_phone,
    instagram,
    next_page_content,
    latitude,
    longitude,
    link_gambar,
  } = req.body;

  try {
    const editCount = await LocationsInfo.updateOne(
      { _id: id },
      {
        name,
        google_maps_link,
        contact_name,
        contact_phone,
        instagram,
        next_page_content,
        latitude,
        longitude,
        link_gambar,
      }
    );
    console.log("sukses mengedit data.\nedit count: ", editCount);
  } catch (err) {
    console.log("Gagal mengedit data:", err);
  } finally {
    res.redirect("/admin/dashboard");
  }
};
