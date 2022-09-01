const { DataTypes } = require("sequelize");
const dataSource = require("../data-source");


const BookModel = dataSource.define("books", {
    id : {
        type : DataTypes.INTEGER(10),
        primaryKey : true,
        allowNull : false,
        autoIncrement : true,
    },

    title : {
        type : DataTypes.STRING,
        allowNull : false,
    },

    description : {
        type : DataTypes.TEXT,
        defaultValue : ""
    },

    cover : {
        type : DataTypes.STRING,
        defaultValue : "https://visionsinmethodology.org/wp-content/uploads/2020/06/book-cover-generic.png"
    }
})

dataSource.sync()

module.exports = BookModel;