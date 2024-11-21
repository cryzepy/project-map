const LocationsInfo = require("../model/LocationsInfo");



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

  try {
    // Menambahkan data ke database
    const newLocation = await LocationsInfo.create({
      name,
      google_maps_link,
      contact_name,
      contact_phone,
      instagram,
      next_page_content,
      latitude,
      longitude,
    });

    console.log("Sukses menambahkan data:");
  } catch (err) {
    console.log("Gagal menambahkan data:", err);
  } finally {
    res.redirect("/admin/dashboard");
  }
};

// Menghapus data lokasi
exports.deleteDataLokus = async (req, res) => {
  const id = req.params.id;

  console.log("id = ", id);

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

  console.log("files = ", req.files);
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

    if (editCount.modifiedCount === 1) {
      console.log("Data berhasil diperbarui");
    } else {
      console.log("Tidak ada perubahan pada data");
    }
  } catch (err) {
    console.log("Gagal mengedit data:", err);
  } finally {
    res.redirect("/admin/dashboard");
  }
};

exports.saveImage = (req, res) => {
    const uploads = upload.array("file", 11)
    uploads(req, res, err => {
        if(err) return res.status(500).send({message: err})
            return res.status(200).send({message: "File uploaded successfully"})
    })
};
