const LocationsInfo = require("../model/LocationsInfo");
const { saveImagesAndLinks } = require("../helpers/saveImagesAndLinks");
const { getDataImagesFromClient } = require("../helpers/getDataImagesFromClient")

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
  } = req.body;

  let id = null;

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
    });

    id = newData.id;

    const images = getDataImagesFromClient(req);

    if(images) {
        await saveImagesAndLinks(images, id);
    }

  } catch (err) {
    try {
      await LocationsInfo.deleteOne({ _id: id });
    } finally {
      console.log("Gagal menambahkan data:", err);
    }
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
      }
    );

    const images = getDataImagesFromClient(req);

    if(images) {
        await saveImagesAndLinks(images, id);
    }
    
  } catch (err) {
    console.log("Gagal mengedit data:", err);
  } finally {
    res.redirect("/admin/dashboard");
  }
};
