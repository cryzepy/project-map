// const LocationsInfo = require("../model/LocationsInfo");


// exports.maps = async (req, res) => {
//     const title = "MAPS | DATA LOKUS KOTA BERSIH DESA TUNJUNGSEKAR"
//     try {
//         const data = await LocationsInfo.findAll({
//             attributes: ["id", "name", "contact_name", "contact_phone", "instagram","latitude","longitude"],
//         })
//         res.render('maps', {data, title});
//       } catch (err) {
//         console.log(err)
//         res.render("maps",{data: [], title})
//       }


// }

// exports.detail = async (req, res) => {
//     const data = await LocationsInfo.findOne({
//         where: { id: req.params.id },
//         attributes: ["next_page_content", "name"]
//     })

//     if(data != null){
//         console.log(data.next_page_content)
//         res.render('lihat_selengkapnya', { content: data.next_page_content.trim(), title: data.name })
//     }else{
//         res.redirect("/")
//     }

// }

// exports.errorPage = (req, res) => {
//     res.render('404');
// }

const LocationsInfo = require("../model/LocationsInfo");
const User = require("../model/User");

exports.maps = async (req, res) => {
    const title = "MAPS | DATA LOKUS KOTA BERSIH DESA TUNJUNGSEKAR"
    try {
        // Mengambil data dari MongoDB
        const data = await LocationsInfo.find({}, "id name contact_name contact_phone instagram latitude longitude");
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
        const data = await LocationsInfo.findOne({ _id: req.params.id }, "next_page_content name");

        if (data != null) {
            console.log(data.next_page_content);
            res.render('lihat_selengkapnya', { content: data.next_page_content.trim(), title: data.name });
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
