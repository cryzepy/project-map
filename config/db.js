const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("projectmaps", "root", "", {
    host: "localhost",
    dialect: "mysql"
})


// const sequelize = new Sequelize("pengelola_keuangan_pribadi", "postgres", "", {
//     host: "localhost",
//     dialect: "postgres"
// })

module.exports = sequelize