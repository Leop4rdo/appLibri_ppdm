const { Sequelize } = require('sequelize');

const dataSource = new Sequelize("applibri_db", "root", "12345678", {
    host : "localhost",
    port: 3306,
    dialect : "mysql",
    define: {
        freezeTableName: true
    },
    logging: console.log,
})


module.exports = dataSource