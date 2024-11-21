const LocationsInfo = require("../model/LocationsInfo");


exports.maps = async (req, res) => {
    const title = "MAPS | DATA LOKUS KOTA BERSIH DESA TUNJUNGSEKAR"
    try {
        const data = await LocationsInfo.findAll({
            attributes: ["id", "name", "contact_name", "contact_phone", "instagram","latitude","longitude"],
        })
        res.render('maps', {data, title});
      } catch (err) {
        res.render("maps",{data: [], title})
      }


}

exports.detail = async (req, res) => {
    const data = await LocationsInfo.findOne({
        where: { id: req.params.id },
        attributes: ["next_page_content", "name"]
    })

    if(data != null){
        console.log(data.next_page_content)
        res.render('lihat_selengkapnya', { content: data.next_page_content.trim(), title: data.name })
    }else{
        res.redirect("/")
    }

}

exports.errorPage = (req, res) => {
    res.render('404');
}