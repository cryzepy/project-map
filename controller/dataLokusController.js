const LocationsInfo = require("../model/LocationsInfo");

exports.addDataLokus = (req, res) => {
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
    LocationsInfo.create({
      name,
      google_maps_link,
      contact_name,
      contact_phone,
      instagram,
      next_page_content,
      latitude,
      longitude,
    });
  } catch (err) {
    console.log("gagal menambahkan data");
  } finally {
    res.redirect("/admin/dashboard");
  }
};

exports.deleteDataLokus = async (req, res) => {
    
  const id = req.params.id;

  console.log("id = ", id)

  try {
    const deleteCount = await LocationsInfo.destroy({
        where: { id }
      });
  }catch(err) {
    console.log("gagal menghapus data")
  }finally {
    res.redirect("/admin/dashboard");
  }
};

exports.editDataLokus = async (req, res) => {
    const {id} = req.params
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
        const editCount = await LocationsInfo.update(
            { name, google_maps_link, contact_name, contact_phone, instagram, next_page_content, latitude, longitude },
            { where: { id } }
        )

      } catch(err) {
        console.log(err)
      }finally {
        res.redirect("/admin/dashboard")
      }
}