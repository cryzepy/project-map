// const LocationsInfo = require("../model/LocationsInfo");

// exports.addDataLokus = (req, res) => {
//   const {
//     name,
//     google_maps_link,
//     contact_name,
//     contact_phone,
//     instagram,
//     next_page_content,
//     latitude,
//     longitude,
//   } = req.body;
//   try {
//     LocationsInfo.create({
//       name,
//       google_maps_link,
//       contact_name,
//       contact_phone,
//       instagram,
//       next_page_content,
//       latitude,
//       longitude,
//     });
//   } catch (err) {
//     console.log("gagal menambahkan data");
//   } finally {
//     res.redirect("/admin/dashboard");
//   }
// };

// exports.deleteDataLokus = async (req, res) => {
    
//   const id = req.params.id;

//   console.log("id = ", id)

//   try {
//     const deleteCount = await LocationsInfo.destroy({
//         where: { id }
//       });
//   }catch(err) {
//     console.log("gagal menghapus data")
//   }finally {
//     res.redirect("/admin/dashboard");
//   }
// };

// exports.editDataLokus = async (req, res) => {
//     const {id} = req.params
//     const {
//         name,
//         google_maps_link,
//         contact_name,
//         contact_phone,
//         instagram,
//         next_page_content,
//         latitude,
//         longitude,
//       } = req.body;

//       try {
//         const editCount = await LocationsInfo.update(
//             { name, google_maps_link, contact_name, contact_phone, instagram, next_page_content, latitude, longitude },
//             { where: { id } }
//         )

//       } catch(err) {
//         console.log(err)
//       }finally {
//         res.redirect("/admin/dashboard")
//       }
// }


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
    const newLocation = new LocationsInfo({
      name,
      google_maps_link,
      contact_name,
      contact_phone,
      instagram,
      next_page_content,
      latitude,
      longitude,
    });

    await newLocation.save(); // Menyimpan data ke MongoDB
    console.log("Data berhasil ditambahkan");
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
