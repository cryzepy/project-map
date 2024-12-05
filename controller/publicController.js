const LocationsInfo = require("../model/LocationsInfo");

exports.maps = async (req, res) => {
    const title = "Map lokus kelurahan sehat tunjungsekar"
    try {
        // Mengambil data dari MongoDB
        const data = await LocationsInfo.find({}, "id name contact_name contact_phone instagram latitude longitude google_maps_link");
        console.log(data)
        res.render('maps', { data, title });
    } catch (err) {
        console.log(err);
        res.render("maps", { data: [], title });
    }
};

exports.detail = async (req, res) => {
    try {
        // Mengambil satu data berdasarkan ID dari MongoDB
        const data = await LocationsInfo.findOne({ _id: req.params.id }, "next_page_content name images");

        if (data != null) {
            res.render('lihat_selengkapnya', { data });
        } else {
            res.redirect("/");
        }
    } catch (err) {
        console.log(err);
        res.redirect("/");
    }
};

exports.errorPage = (req, res) => {
    res.render('404');
};
