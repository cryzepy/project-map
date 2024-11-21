const LocationsInfo = require("../model/LocationsInfo")

exports.home = async (req, res) => {

    try {
        const data_lokus = await LocationsInfo.findAll()
        res.render("dashboard", { data_lokus })
    } catch(err) {
        res.render("dashboard", { data_lokus: [] })
    }
  
}

exports.edit_data_lokus = async (req, res) => {
    const id = req.params.id
    try {
        const data_lokus = await LocationsInfo.findOne({ where: { id }  })
        if(data_lokus != null){
            res.render("edit_data_lokus", { data_lokus })

        }else {
            throw new Error('Data tidak ditemukan')
        }
    } catch(err) {
        res.redirect("/auth/logout")
    }
   
}

exports.tambah_data_lokus = async (req, res) => {
    res.render("create_data_lokus")
}

